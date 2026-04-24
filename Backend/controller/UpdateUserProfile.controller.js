import { User } from "../model/User.Model"
import { uploadOnCloudinary } from "../utils/cloudinary"

const updateUserProfile = async (req,res) => { 
   const profilePic = req.files
  if (profilePic) {
    await uploadOnCloudinary(profilePic)
  }

  const user = await User.findOneAndUpdate()


 }