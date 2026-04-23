import mongoose from "mongoose"

const connectDb = async()=>{
    await mongoose.connect(process.env.DBURI)
}


export default connectDb