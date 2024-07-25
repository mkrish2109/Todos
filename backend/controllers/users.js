const ExToken = require("../models/ExToken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const path = require("path");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Failed to fetch users!" });
  }
};

const getSingalUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Failed to fetch user!" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { password, username } = req.body;

    const existingUser = await User.findById(req.params.id);
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, msg: "No such user found!" });
    }
    const newUserObj = {};

    if (username) {
      newUserObj.username = username;
    }

    if (req.files && req.files.image) {
      if (req.files.image.size > 1000000) {
        return res.status(400).json({
          success: false,
          msg: "Please upload a file smaller than or equal to 1mb!",
        });
      }
      const uploadPath = path.join(
        __dirname,
        "../uploads",
        req.files.image.name
      );

      await req.files.image.mv(uploadPath);

      const imageURL = `http://localhost:5000/uploads/${req.files.image.name}`;
      newUserObj.image = imageURL;
    }
    if (password) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(
        req.body.password?.toString(),
        salt
      );
      newUserObj.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...newUserObj },
      {
        new: true,
      }
    );
    if (password) {
      const token = req.headers.authorization.split(" ")[1];
      await ExToken.create({ token });
    }
    // console.log(newUserObj);
    res
      .status(200)
      .json({ success: true, data: "User updated successfully! " });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: "Failed to UpDate user!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: "Failed to Delete user!" });
  }
};

module.exports = { getAllUser, getSingalUser, updateUser, deleteUser };
