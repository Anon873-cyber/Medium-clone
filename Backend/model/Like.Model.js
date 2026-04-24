import { Blog } from './Blog.Models';

const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema(
    {
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Blog
        },  // post where people commented 
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },   // who commented
        type: "like" | "dislike"
    }
    , { timestamps: true });

const Like = mongoose.model('Like', LikeSchema)


export {
    Like
}