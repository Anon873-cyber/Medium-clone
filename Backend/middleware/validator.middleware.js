import { ApiError } from "../utils/api-Error.js";
import {validationResult} from "express-validator"



const validateRequest = (req,res,next)=>{
  //collect the error from the request object using validationResult function from express-validator
  const errors = validationResult(req)

  if(errors.isEmpty()){
    //if no error move to next middleware
    return next()

  }
  
  const Error = []

  errors.array().forEach((err)=>{
    Error.push({
        [err.path]:err.msg
    })
  })
   
  throw new ApiError(404,"received data is not valid ",Error)
   
}


export {
    validateRequest
}