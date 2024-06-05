const { generateToken, getUserObject } = require("../helper/authHelper");
const ExToken = require("../models/ExToken");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    let objUser = { ...req.body };

    const existUser = await User.countDocuments(req.params.id);
    if (existUser === 0) {
      objUser.role = "admin";
    }
    //  const token = jwt.sign({id:objUser._id},"secret"),
    const salt = bcrypt.genSaltSync(10);

    const hashPassword = bcrypt.hashSync(req.body.password.toString(), salt);

    const user = await User.create({ ...objUser, password: hashPassword });
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      // data: getUserObject(user),
      token,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: error.massage });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ success: false, msg: "Invalid email" });
    }

    // const isPasswordCorrect = user.password === password.toString();

    const isPasswordCorrect = bcrypt.compareSync(
      password.toString(),
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, msg: "Invalid password" });
    }
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      //  data: getUserObject(user),
      token,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: error.massage });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    await ExToken.create({ token });

    res.status(200).json({ success: true, mag: "LogOut successFully!" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, msg: error.massage });
  }
};

module.exports = { register, login, logout };
