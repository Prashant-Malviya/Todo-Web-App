import express from "express";
import { addTask, getTasks, removeTask, updateTask, updateTaskStatus } from "../controllers/task-controller.js";
import ensureAccess from "../middleware/account-auth-middleware.js";

const router = express.Router();

router.post("/tasks", ensureAccess, addTask);
router.get("/tasks", ensureAccess, getTasks);
router.delete("/tasks", ensureAccess, removeTask);
router.put("/tasks/:id", ensureAccess, updateTask);
router.patch("/tasks/:id/status", ensureAccess, updateTaskStatus);

export default router;
