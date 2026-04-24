import { User } from "../model/User.Model.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";
import asyncHandler from "../utils/asyncHandler.js";

const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  const file = req.file;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  let updatedAvatar = user.avatar;

  // 1. If new image uploaded
  if (file) {
    const uploadResult = await uploadOnCloudinary(file.path);

    // 2. Delete old image from cloudinary (if exists)
    if (user.avatar?.public_id) {
      await deleteFromCloudinary(user.avatar.public_id);
    }

    // 3. Replace avatar
    updatedAvatar = {
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    };
  }

  // 4. Update other fields if needed
  const updateData = {
    avatar: updatedAvatar,
  };

  if (req.body.username) updateData.username = req.body.username;
  if (req.body.bio) updateData.bio = req.body.bio;

  // 5. Save update
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: updateData },
    { new: true, runValidators: true }
  ).select("-password");

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    user: updatedUser,
  });
});

export { updateUserProfile };