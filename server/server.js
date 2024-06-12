import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";  // Assuming these routes exist
import forgotPasswordRouter from "./routes/forgotPassword.js";  // Assuming these routes exist

// Load environment variables from .env file
dotenv.config();

// App configuration
const app = express();
const port = process.env.PORT || 8000;
mongoose.set('strictQuery', true);

// Middlewares
app.use(express.json());
app.use(cors());

// Database configuration
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB Connected");
    }
});

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/forgotPassword", forgotPasswordRouter);

// Root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the ToDoApp API");
});

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
