import mongoose,{Schema}  from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = new Schema({
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: `https://placehold.co/200x200`,
        localPath: "",
      },
    },
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    accessTokem:{
        type:String
    },
    refreshToken:{
        type:String
    }
})


//hash the password
UserSchema.pre("save",async function(){
    if(!this.isModified("password")) return 
    this.password = await bcrypt.hash(this.password,10)
})



const User = mongoose.model("User",UserSchema)


export {
    User
}
