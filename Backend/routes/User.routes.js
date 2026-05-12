import { Router } from "express";
import { upload } from "../middlewares/Multer.middlewere.js";
import { updateUserDetails, updateUserProfileImage } from "../controller/User.controller.js";

const router = Router()

router.route("/me/update-profile").put(upload.single("profileImage"), updateUserProfileImage)
router.route("/me/update-details").put(updateUserDetails)


export default router;