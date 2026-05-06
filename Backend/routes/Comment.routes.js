import { Router } from "express";

const router = Router();

import {
    createcommentController,
    getcommentsController,
    deletecommentController,
    getsingleCommentController,
    updatesinglecommnentController,
}from "../controller/comment.controller.js"

route.route(requireAuth)

router.route("/:blogId/comments").get(getcommentsController)
router.route("/:blogId/comments").post(createcommentController)
router.route("/comments/:id").get(getsingleCommentController)
router.route("/:blogId/comments").patch(updatesinglecommnentController)
router.route("/:blogId/comments").delete(deletecommentController)

export default router;