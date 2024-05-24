const User = require("../models/User");

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

// const addUser = async (req, res) => {
//   // try {
//   //   let objUser = { ...req.body };

//   //   const existUser = await User.countDocuments(req.params.id);
//   //   if (existUser === 0) {
//   //     objUser.role = "admin";
//   //   }
//   //   const user = await User.create(objUser);
//   //   res.status(200).json({ success: true, data: user });
//   // } catch (error) {
//   //   console.log("Error: ", error);
//   //   res.status(500).json({ success: false, msg: "Failed to add user!" });
//   // }
// };

const updateUser = async (req, res) => {
  try {
    const updatesUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
