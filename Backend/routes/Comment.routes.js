import { Router } from "express";

const router = Router();

import {
    createCommentController,
    getCommentsController,
    deleteCommentController,
    getSingleCommentController,
    updateSingleCommnentController,
}from "../controller/Comment.controller.js"

route.route(requireAuth)

router.route("/:blogId/comments").get(getCommentsController)
router.route("/:blogId/comments").post(createCommentController)
router.route("/comments/:id").get(getSingleCommentController)
router.route("/:blogId/comments").patch(updateSingleCommnentController)
router.route("/:blogId/comments").delete(deleteCommentController)

export default router;