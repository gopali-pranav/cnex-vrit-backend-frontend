// otpRoutes.js

const express = require("express");
const router = express.Router();
const { sendOTP, verifyOTP } = require("../controller/otpController");

// Route to generate OTP and send it via email
router.post("/generateotp", sendOTP);

// Route to verify OTP
router.post("/verifyotp", verifyOTP);

module.exports = router;
