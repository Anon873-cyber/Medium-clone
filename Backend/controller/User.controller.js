import { uploadOnCloudinary, deleteCloudinaryImage } from "../utils/cloudinary.js"
import { User } from "../model/User.Model.js";
import { ApiError } from "../utils/api-Error.js";
import { ApiResponse } from "../utils/api-Response.js";

const updateUserProfileImage = async (req, res) => {
    const userId = req.user?._id;

    if (!req.file?.path) {
        throw new ApiError(400, "Image is required");
    }

    const user = await User.findById(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    // Upload new image first
    const uploadedImage = await uploadOnCloudinary(req.file.path);

    if (!uploadedImage) {
        throw new ApiError(500, "Image upload failed");
    }

    // Delete old image if exists
    if (user.profileImagePublicId) {
        await deleteCloudinaryImage(user.profileImagePublicId);
    }
    


    // Update DB
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            profileImage: uploadedImage.secure_url || uploadedImage.url,
            profileImagePublicId: uploadedImage.public_id
        },
        { new: true }
    );

    return res.status(200).json(
        new ApiResponse(200, updatedUser, "Profile image updated successfully")
    );
};

const updateUserDetails = async (req, res) => {
    const userId = req.user?._id;
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { name, email },
        { new: true }
    );

    return res.status(200).json(
        new ApiResponse(200, updatedUser, "User details updated successfully")
    );
};

export { updateUserProfileImage, updateUserDetails }