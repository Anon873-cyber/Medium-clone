import mongoose from "mongoose";
import bcrypt from "bcrypt";

const OtpSchema = new mongoose.Schema({
    otp: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    }
}, { timestamps: true });


// hash OTP before saving
OtpSchema.pre("save", async function (next) {
    if (!this.isModified("otp")) return next();

    const salt = await bcrypt.genSalt(10);
    this.otp = await bcrypt.hash(this.otp, salt);
    next();
});

// method to compare OTP
OtpSchema.methods.isOtpValid = async function (enteredOtp) {
    return await bcrypt.compare(enteredOtp, this.otp);
};

export default mongoose.model("Otp", OtpSchema);