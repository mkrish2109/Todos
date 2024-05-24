const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getSingalUser,

  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/", getAllUser);

router.get("/:id", getSingalUser);

// router.post("/", addUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
