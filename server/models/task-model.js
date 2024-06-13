// task-model.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: 'User' },
    completed: { type: Boolean, required: true },
}, { timestamps: true });

const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
