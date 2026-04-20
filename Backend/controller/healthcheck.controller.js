import { ApiResponse } from "../utils/api-Response";
import asyncHandler from "../utils/Async-handler";



const healthCheck = asyncHandler(async(req,res)=>{
    res 
    .status(200)
    .send(new ApiResponse(200,"Server is healthy and running fine"))
})



export {
healthCheck
}

