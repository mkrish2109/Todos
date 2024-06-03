const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const getTaskstats = require("../controllers/dashbord");
const router = express.Router();

router.get("/stats", authMiddleware, getTaskstats);

module.exports = router;
