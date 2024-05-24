const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAllTasks);

router.get("/:id", authMiddleware, getSingleTask);

router.post("/", authMiddleware, addTask);

router.patch("/:id", authMiddleware, updateTask);

router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
