import mongoose from "mongoose"
import { type } from "os"
import { stringify } from "querystring"
import { boolean } from "webidl-conversions"
const {model,Schema}=mongoose

const Task=new Schema({
    type:{
        type:String,
        enum:["text","list"],
        required:true
    },
    body:String,
    items:[{body:String}],
    shared:{
        type:Boolean,
        default:false
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"category",
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},
    {timestamps:true,versionKey:false})

export default mongoose.models.task || model("task",Task)