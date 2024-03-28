// otpController.js

const User = require("../models/User");
const nodemailer = require("nodemailer");

// Define a function to generate a random OTP
const generateOTP = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

// Define nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "avangopali5@gmail.com",
    pass: "rxnu jlzr tjxa ieas", // Your Gmail password
  },
});

// Controller function to generate OTP and send it via email
const sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  try {
    // Save OTP to database
    await User.findOneAndUpdate({ email }, { otp }, { upsert: true });

    // Send OTP via email
    const mailOptions = {
      from: "avangopali5@gmail.com", // Sender email address
      to: email,
      subject: "OTP for Email Verification",
      text: `Your OTP for email verification is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("OTP sent successfully");
  } catch (error) {
    console.error("Error generating OTP:", error);
    res.status(500).send("Internal server error");
  }
};

// Controller function to verify OTP
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Retrieve user from database
    const user = await User.findOne({ email });

    // Check if user exists and OTP matches
    if (user && user.otp === otp) {
      // Check if OTP has expired
      if (new Date() > user.otpExpiration) {
        return res.status(400).json({ success: false, message: "OTP expired" });
      }

      // OTP verification successful
      return res
        .status(200)
        .json({ success: true, message: "OTP verified successfully" });
    } else {
      // OTP verification failed
      return res
        .status(400)
        .json({ success: false, message: "Failed to verify OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to verify OTP" });
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
};
