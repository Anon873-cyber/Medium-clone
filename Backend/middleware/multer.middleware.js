import multer from "multer"


// to serve static files 
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"../uploads/")
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    }

})




const upload = multer({storage})




export {
    upload
}