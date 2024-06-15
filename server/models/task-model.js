import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: 'User' },
    completed: { type: Boolean, required: true },
    type: { type: String, enum: ['Official', 'Personal', 'Hobby'], required: true },
    deleted: { type: Boolean, default: false }, // Soft delete flag
}, { timestamps: true });

const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
