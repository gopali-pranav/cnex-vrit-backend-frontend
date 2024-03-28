// models/MasterPassword.js
const mongoose = require("mongoose");

const masterPasswordSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  recoveryEmail: {
    type: String,
    required: true,
  },
});

const MasterPassword = mongoose.model("MasterPassword", masterPasswordSchema);

module.exports = MasterPassword;
