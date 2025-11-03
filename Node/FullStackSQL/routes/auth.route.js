import express from "express"
import { getMe, loginUser, logout, registerUser, verifyUser } from "../controllers/auth.controller.js"
import isLoggedIn from "../middleware/auth.middleware.js"

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.get('/verify/:token', verifyUser)
userRouter.post('/login',loginUser)
userRouter.get('/profile',isLoggedIn, getMe)
userRouter.post("/logout", isLoggedIn, logout)


export default userRouter