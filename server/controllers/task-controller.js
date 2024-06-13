import taskModel from "../models/task-model.js";
import userModel from "../models/user-model.js";
import { sendMail } from "../utils/mail-util.js";

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newTask = new taskModel({
      title,
      description,
      completed: false,
      userId,
    });
    await newTask.save();
    sendMail(user.email, "Task Added", title, description);

    res.status(200).json({ message: "Task added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeTask = async (req, res) => {
  const { id } = req.body;

  try {
    await taskModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, description, type, dueDate } = req.body;

  try {
    const task = await taskModel.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = title;
    task.description = description;
    task.type = type;
    task.dueDate = dueDate;

    await task.save();

    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addTask, getTasks, removeTask, updateTask };
