import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/user-route.js";
import taskRouter from "./routes/task-route.js";
import connectDB from "./config/connect-db"; 
import errorHandler from "./errors/error-handler.js"; 

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// App configuration
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

// Root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the ToDoApp API");
});

// Use the error handler middleware
app.use(errorHandler);

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
