import asyncHandler from "../utils/Async-handler.js";
import { ApiError } from "../utils/api-Error.js";
import { ApiResponse } from "../utils/api-Response.js";
import {Subscriber} from "../model/Subsriber.Model.js"
import {User} from "../model/User.Model.js"


const subscribeUser = asyncHandler(async (req, res) => {
   const id = req.params.userId

   const subscribingUser = await User.findById(id)
   if(!subscribingUser){
    throw new ApiError(404,"User you want to subscribe not found")
   }

   const subscribeUser = await Subscriber.create({
    followerId:req.id,
    followingId:id
   })

   if(!subscribeUser){
    throw new ApiError(500,"Failed to subscribe user")
   }

   return res 
   .status(200)
   .json(
    new ApiResponse(200,"User subscribed successfully",subscribeUser)
   )
})


const unsubscribeUser = asyncHandler(async (req, res) => {
       const id = req.params.userId

       const unsubscribingUser = await User.findById(id)
       if(!unsubscribingUser){
         throw new ApiError(404,"User you want to unsubscribe not found")
        }
        const unsubscribeUser = await Subscriber.findOneAndDelete({
            followerId:req.id,
            followingId:id
        })
        if(!unsubscribeUser){
         throw new ApiError(404,"Subscription not found")
        }
        return res
        .status(200)
        .json(
            new ApiResponse(200,"User unsubscribed successfully",unsubscribeUser)
        )
})

const checkSubscriber = asyncHandler(async (req, res) => {
     const totalSubscribers = await Subscriber.aggregate([
        {
            $match:{
                followingId:req.id
            }
        },
        {
            $count: "totalSubscribers"
        }   
     ])     
     const count = totalSubscribers.length > 0 ? totalSubscribers[0].totalSubscribers : 0
     return res 
     .status(200)
     .json(
        new ApiResponse(200,"subscibers fetched successfully", { totalSubscribers: count })
     )
})

const checkUserFollower = asyncHandler(async (req, res) => {
       const id = req.params.userId
       
       const checkUser= await User.findById(id)
        if(!checkUser){
         throw new ApiError(404,"User not found")
        }

        const isFollowing = await Subscriber.findOne({
        followingId: userId,
        followerId: currentUserId
         });
        const totalFollowers = checkFollower.length > 0 ? checkFollower[0].followerDetails.length : 0
        return res
        .status(200)
        .json(
            new ApiResponse(200,"Follower checked successfully", totalFollowers)
        )
})





export {
    checkSubscriber,
    subscribeUser,
    checkUserFollower,
    unsubscribeUser
}



