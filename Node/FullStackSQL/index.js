import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"


//custom routes

import userRouter from "./routes/auth.route.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 40000

app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Test Checked"
    })
})

app.use('/api/v1/users',userRouter)
app.listen(port, (req,res) =>{
    console.log(`Backend is listing at ${port}`);
})