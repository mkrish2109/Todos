const jwt = require("jsonwebtoken");

const ExToken = require("../models/ExToken");

async function authMiddleware(req, res, next) {
  try {
    let token = req.headers.authorization;

    token = token && token.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ success: false, msg: "No Token provided!" });
    }

    const user = jwt.verify(token, "secret");
    const tokenId = await ExToken.findOne({ user: user.id });
    const existToken = await ExToken.findOne({ token: token });

    if (existToken) {
      return res.status(401).json({ success: false, msg: "Token Expired" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, msg: "Faild to authorize!" });
  }
}

module.exports = authMiddleware;
