import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";
import { ApiError } from "../utils/api-Error";
import { ApiResponse } from "../utils/api-Response.js";



const RegisterUser = asyncHandler(async(req , res)=>{
//give me username or email &&  password
const  {username,email,password} = req.body
 
//   check if user exist in the DB
const checkUser = await User.findOne({
    $or:[{username},{email}]
})

if(checkUser){
    throw new ApiError(
        401,
        "User with this email or username already exist"
    )
}

const user = await User.create({
    username,
    email,
    password
})
///We will handle validation through express validator
//  in the route file and we will set validateBeforeSave to false 
// to avoid validation error when we save the user because we will handle 
// validation through express validator in the route file
user.save({validateBeforeSave:false})

const createUser = await User.findById(user._id).select(
    "-password -refreshToken"
)

if(!createUser){
    throw new ApiError(
        500,
        "Something went wrong while registering the user"
    )
}

return res
.status(201)
,json(
    new ApiResponse(
        201,
        "User registered successfully",
        createUser
    )
)

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