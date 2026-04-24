import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"
import multer from "multer"

const app = express();

//basic setup for express server
app.use(cors())
    //to parse json to object
    app.use(express.json())

//to parse urlencoded data convert it into javascript object and then we can user in req.body
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// to serve static files 
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    }

})


const upload = multer({storage})

app.get("/",(req,res)=>{
    res
    .status(200)
    .send("Home route of the backend")
})

app.get("/helloworld",(req,res)=>{
    res
    .status(200)
    .send("Hello World! Wellcome here ")
})



// /export health route 
import healthRoute  from "./routes/healthcheck.routes.js"
app.use("/api/v1/health",healthRoute)

// // import auth routes
import authRoutes from "./routes/auth.routes.js"
app.use("/api/v1/auth",authRoutes)


export default app;