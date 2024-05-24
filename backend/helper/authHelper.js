const jwt = require("jsonwebtoken");

function generateToken(user) {
  const token = jwt.sign({ userId: user._id }, "secret", {
    expiresIn: "24h",
  });
  return token;
}

function getUserObject(user) {
  return { userId: user._id, username: user.username, email: user.email };
}

module.exports = {
  generateToken,
  getUserObject,
};
