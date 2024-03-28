// controllers/masterPasswordController.js
const MasterPassword = require("../models/masterpassword");

// Controller function to set the master password
const setMasterPassword = async (req, res) => {
  try {
    const { password, recoveryEmail } = req.body;

    // Check if the password or recovery email is missing
    if (!password || !recoveryEmail) {
      return res
        .status(400)
        .json({ message: "Password and recovery email are required" });
    }

    // Check if the password meets any specific criteria (e.g., minimum length)
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    // Check if a master password already exists (optional, depending on your requirements)
    const existingMasterPassword = await MasterPassword.findOne();
    if (existingMasterPassword) {
      return res
        .status(400)
        .json({ message: "Master password already exists" });
    }

    // Create a new master password entity
    const newMasterPassword = new MasterPassword({ password, recoveryEmail });
    await newMasterPassword.save();

    // Respond with success message
    res.status(201).json({ message: "Master password set successfully" });
  } catch (error) {
    console.error("Error setting master password:", error);
    res.status(500).json({ message: "Failed to set master password" });
  }
};

const login = async (req, res) => {
  const { password } = req.body;

  try {
    const masterPassword = await MasterPassword.findOne();

    if (!masterPassword) {
      return res.status(404).json({ error: "Master password not found" });
    }

    if (password === masterPassword.password) {
      return res.json({ authenticated: true });
    } else {
      return res.json({ authenticated: false });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  setMasterPassword,
  login,
};
