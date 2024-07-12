import userModel from "../../../../Database/models/user.model.js"
import { compareSync, hashSync} from "bcrypt"
import jwt from "jsonwebtoken"
import { Error_handler_class } from "../../../utils/error-class.utils.js"

// sign up
export const sign_up=async(req,res,next)=>{
    const {username,email,password}=req.body
    // check if email exists
    const if_email_exists=await userModel.findOne({email})
    if(if_email_exists){
       return next(new Error_handler_class(
            "email is already exists",
            409,
            "email is already exists",
            "sign up api",
            {email}
        ))
    }
    // hashing password
    const hashed_pass=hashSync(password,10)
    // create new user
    const user_object={username,email,password:hashed_pass}
    const add_user=await userModel.create(user_object)
    // response
    res.status(201).json({Message:"the user added successfully",_id:add_user._id})
}

// sign in
export const sign_in=async(req,res,next)=>{
    const{username,password}=req.body
    // check if user exists by his email
    const user=await userModel.findOne({username})
    if(!user){
       return next(new Error_handler_class(
            "invalid user information",
            400,
            "invalid user information",
            "sign in api",
        ))
    }
    // check if password is true
    const is_match=compareSync(password,user.password)
    if(!is_match){
        return next(new Error_handler_class(
            "invalid user information",
            400,
            "invalid user information",
            "sign in api",
        ))
    }
    // generate token
    const token=jwt.sign({user_id:user._id},"tokenSignature")
    // response
    res.status(200).json({message:"Logged in successfully",token})
}


