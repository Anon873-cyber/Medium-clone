import { Router } from "express";

const router = Router();

import {
    createCommentController,
    getCommentsController,
    deleteCommentController,
    getSingleCommentController,
    updateSingleCommnentController,
}from "../controller/comment.controller.js"

import requireAuth from "../middlewares/Auth.middlewere.js";

router.use(requireAuth)

router.route("/:blogId/comments").get(getCommentsController)
router.route("/:blogId/comments").post(createCommentController)
router.route("/comments/:id").get(getSingleCommentController)
router.route("/:id/comments").patch(updateSingleCommnentController)
router.route("/:id/comments").delete(deleteCommentController)


export default router