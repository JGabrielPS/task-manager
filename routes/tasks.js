import express from "express";
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const tasks = express.Router();

tasks.route("/").get(getAllTasks).post(createTask);
tasks.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default tasks;
