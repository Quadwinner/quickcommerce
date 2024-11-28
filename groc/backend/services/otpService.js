const nodemailer = require('nodemailer');
require('dotenv').config();

// Create an email transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send OTP via email
const sendOTP = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'OTP for Registration',
    text: `Your OTP for registration is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);
    return otp;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
};

module.exports = { sendOTP };
