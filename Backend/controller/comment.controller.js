import asyncHandler from "../utils/Async-handler.js";
import { Comment } from "../model/Comment.Models.js";
import { ApiError } from "../utils/api-Error.js";
import { ApiResponse } from "../utils/api-Response.js";
import { Blog} from "../model/Blog.Models.js";




//user will comment okay 
// user will have ID 
// save that ID and also his comment that is it 
// When needed throw it back


const createcommentController = asyncHandler(async(req , res)=>{

    const postId = req.params.blogId
    const {comment } = req.body 

    const ExistedBlog = await Blog.findById(postId)
    if(!ExistedBlog) throw new ApiError(404,"Blog does not exist")

    const createdComment = await Comment.create({
       postId, author:req?.id,text:comment
    })
    if(!createdComment){
    throw new ApiError(404,"Something went wrong while commenting")
    }
    return res
    .status(201)
    .json(
        new ApiResponse(201,"Comment created successfully",createdComment)
    )

})

const getcommentsController = asyncHandler(async(req , res)=>{
    const postId = req.params.blogId

    const ExistedBlog = await Blog.findById(postId)
    if(!ExistedBlog) throw new ApiError(404,"Blog does not exist")
    
    const allcomments = await Comment.find({postId:blogId})   
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,"all Comments fetched successfully",allcomments)
    )

})



export {
    createcommentController,
    getcommentsController
}