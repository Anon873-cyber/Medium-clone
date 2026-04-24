import { Router } from "express";


const router = Router()

import {
    createBlog,
    deleteBlog,
    updateBlog


 } from "../controller/Blog.controller.js";

import {

} from "../validator/validator.js"

import {
    VerifyJwt
} from "../middleware/auth.middleware.js"

import {
    validateRequest
} from "../middleware/validator.middleware.js"

import {
    upload
} from "../middleware/multer.middleware.js"


router.route("/createPost").post(VerifyJwt,upload.single("thumbnail"),createBlog)



export default router