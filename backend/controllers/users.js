const User = require("../models/User");
const bcrypt = require("bcrypt");

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
``;
const updateUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);

    const hashPassword = bcrypt.hashSync(req.body.password.toString(), salt);

    const updatesUser = await User.findByIdAndUpdate(
      req.params.id,
      { password: hashPassword },
      {
        new: true,
      }
    );

    res.status(200).json({ success: true, data: updatesUser });
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
