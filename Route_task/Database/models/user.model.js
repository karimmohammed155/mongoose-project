import mongoose from "mongoose";
const {model,Schema} = mongoose;

const User=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
    {timestamps:true, versionKey:false})

export default mongoose.models.user || model("user",User)