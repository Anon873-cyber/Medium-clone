import asyncHandler from "../utils/Async-handler.js";
import { ApiError } from "../utils/api-Error.js";
import { ApiResponse } from "../utils/api-Response.js";
import {Blog} from "../model/Blog.Models.js"






const createBlog = asyncHandler(async(req ,res )=>{

    const {title , body , tags  }  = req.body 
    const file = req.file ? req.file.path :null

    const create = await Blog.create({
        author:req.user?._id,
        thumbnail:file,
        title :title,
        Body:body,
        tags:tags
    })
   
    if(!create) throw new ApiError("Blog post not created",400)

    return res
    .status(201)
    .json(
        new ApiResponse(201,"Blog post created successfully",create)
    )
})

const updateBlog = asyncHandler(async(req ,res )=>{
    const {id} = req.params
    const {title , body , tags  }  = req.body
    
    const updatedData = {title,body,description}

    if(req.file){
        updatedData.thumbnail = req.file.path
    }

    const update = await Blog.findByIdAndUpdate(
        id,
        {
            $set: {
             updatedData
            }
        },
        { new: true }
    )

    if (!update) throw new ApiError("Blog post not updated", 400)

    return res
        .status(200)
        .json(
            new ApiResponse(200, "Blog post updated successfully", update)
        )

})

const deleteBlog = asyncHandler(async(req ,res )=>{


    
})



export{

createBlog,
deleteBlog,
updateBlog,


}