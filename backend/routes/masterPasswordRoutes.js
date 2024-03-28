// routes/masterPasswordRoutes.js
const express = require("express");
const router = express.Router();
const {
  setMasterPassword,
  login,
} = require("../controller/masterPasswordController");

// POST request to set master password
router.post("/", setMasterPassword);

router.post("/login", login);

module.exports = router;
