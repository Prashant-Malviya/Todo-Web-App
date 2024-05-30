const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ToDoApp", {
        });
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

connectDB();
