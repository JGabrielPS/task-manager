import Task from "../models/Task.js";
import asyncWrapper from "../middleware/async.js";
import { createCustomError } from "../errors/custom-error.js";

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) return next(createCustomError(`No task with id: ${taskID}`, 404));
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ id: taskID, data: req.body });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) return next(createCustomError(`No task with id: ${taskID}`, 404));
  res.status(200).json({ task: null, status: "success" });
});

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
