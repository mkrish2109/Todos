const express = require("express");
const { register, login, logout } = require("../controllers/auth");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", authMiddleware, logout);

module.exports = router;
