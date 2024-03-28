// models/user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  otpExpiration: { type: Date, default: Date.now, expires: 60000 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
