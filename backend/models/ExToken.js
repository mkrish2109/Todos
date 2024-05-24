const mongoose = require("mongoose");

const exTokenSchema = new mongoose.Schema({
  token: String,
  createAt: { type: Date, default: Date.now, expires: "24h" },
});

module.exports = mongoose.model("ExToken", exTokenSchema);
