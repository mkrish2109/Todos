const Task = require("../models/Task");

const getTaskstats = async (req, res) => {
  try {
    const isCompleted = await Task.countDocuments({
      userId: req.user.userId,
      isCompleted: true,
    });
    const penddingTask = await Task.countDocuments({
      userId: req.user.userId,
      isCompleted: false,
    });
    const totalTask = await Task.countDocuments({
      userId: req.user.userId,
    });
    res
      .status(200)
      .json({ success: true, data: { isCompleted, penddingTask, totalTask } });
  } catch (error) {
    res.status(500).json({ success: false, msg: "failed to count " });
  }
};

module.exports = getTaskstats;
