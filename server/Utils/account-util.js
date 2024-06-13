import jwt from "jsonwebtoken";

const createAccessToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '3d',
    });
};

export { createAccessToken };
