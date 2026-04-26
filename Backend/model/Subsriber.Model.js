import { User } from './User.Model';

const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    followerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    followingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }

}, { timestamps: true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);


export {
    Subscriber
}