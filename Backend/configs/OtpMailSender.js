import nodemailer from "nodemailer";
import { ApiError } from "../utils/api-Error.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password
  },
});

export const otpMailSender = async (otp, receiverMail) => {
  try {
    const response = await transporter.sendMail({
      from: process.env.OWNER_MAIL,
      to: receiverMail,
      subject: "Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Your OTP Code</h2>
          <p>Your OTP is:</p>
          <h1 style="color: #4CAF50;">${otp}</h1>
          <p>This OTP will expire in 5 minutes.</p>
        </div>
      `,
    });

    return response;
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new ApiError(500, "Unable to send otp, please try again");
  }
};