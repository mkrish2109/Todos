const Task = require("../models/Task");

// Task.findById();
// Task.findOne();
// Task.findByIdAndUpdate();
// Task.findOneAndUpdate();
// Task.findByIdAndDelete();
// Task.findOneAndDelete();

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Failed to fetch tasks!" });
  }
};

const getSingleTask = (req, res) => {
  res.send("To-Do with ID: " + req.params.id);
};

const addTask = async (req, res) => {
  try {
    const { task, isCompleted, priority, dueDate } = req.body;
    const result = await Task.create({
      task,
      isCompleted,
      priority,
      dueDate,
      userId: req.user.userId,
    });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: "Failed to add task!" });
  }
};

const updateTask = async (req, res) => {
  try {
    const result = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: "Failed to update task!" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
};
