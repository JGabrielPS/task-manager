import Task from "../models/Task.js";

const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update one item");
};

const deleteTask = (req, res) => {
  res.send("delete one item");
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
