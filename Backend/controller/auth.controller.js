import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";
import { ApiError } from "../utils/api-Error";
import { ApiResponse } from "../utils/api-Response.js";



const RegisterUser = asyncHandler(async(req , res)=>{

})


const LoginUser = asyncHandler(async(req , res)=>{
    
})

const LogoutUser = asyncHandler(async(req , res)=>{
    
})

const DeleteUser = asyncHandler(async(req , res)=>{
    
})


const refreshToken = asyncHandler(async(req , res)=>{
    
})



export{

    RegisterUser,
    LoginUser,
    LogoutUser,
    refreshToken,
    DeleteUser

}