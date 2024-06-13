import userModel from "../models/user-model.js";
import { createAccessToken } from "../utils/account-util.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { AuthError, ValidationError } from "../errors/auth-errors.js"; 


// registerAccount 
const registerAccount = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return next(new ValidationError("Please enter all fields"));
    }

    if (!validator.isEmail(email)) {
        return next(new ValidationError("Please enter a valid email"));
    }

    if (!validator.isStrongPassword(password)) {
        return next(new ValidationError("Please enter a strong password"));
    }

    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return next(new ValidationError("User already exists"));
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        const token = createAccessToken(user._id);

        res.status(200).json({ user, token });
    } catch (error) {
        next(error);
    }
};

// loginAccount
const loginAccount = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ValidationError("Please enter all fields"));
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return next(new AuthError("User does not exist"));
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(new AuthError("Invalid credentials"));
        }

        const token = createAccessToken(user._id);
        res.status(200).json({ user, token });
    } catch (error) {
        next(error);
    }
};

// getUserInfo
const getUserInfo = async (req, res, next) => {
    const id = req.user.id;

    try {
        const user = await userModel.findById(id);
        if (!user) {
            return next(new AuthError("User not found"));
        }

        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

export { registerAccount, loginAccount, getUserInfo };
