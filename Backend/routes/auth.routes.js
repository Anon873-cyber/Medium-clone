import { Router } from "express";

import {
    RegisterUser,
    LoginUser,
    refreshToken,
    LogoutUser,
    DeleteUser
} from  "../controller/auth.controller.js"




const router = Router()

////validation 
//jwt verification
//remaingggggg will workkkkkk on that byeeee

router.route("/register").post(RegisterUser)

router.route("/login").post(LoginUser)

router.route("/logout").post(LogoutUser)

router.route("/delete").delete(DeleteUser)




export default router;