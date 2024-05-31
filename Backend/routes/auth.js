const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    console.log("Received request body:", req.body);

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const passwordString = String(password);
    const hashPassword = await bcrypt.hash(passwordString, saltRounds);

    const user = new User({ email, username, password: hashPassword });
    await user.save();

    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Sign in
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(400).json({ message: "Please Sign Up First" });
    }

    // Log the passwords to ensure they are in the correct format
    console.log("Plaintext password:", password);
    console.log("Hashed password:", user.password);

    // Convert password to a string if it isn't already
    const passwordString = String(password);

    // Ensure hashed password is a string
    const hashedPasswordString = String(user.password);

    // Correct order of arguments: plaintext password first, hashed password second
    const isPasswordCorrect = await bcrypt.compare(passwordString, hashedPasswordString);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const { password: userPassword, ...others } = user;

    res.status(200).json(others);
  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
