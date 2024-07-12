import mongoose from "mongoose"
const {model,Schema}=mongoose

const Category=new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},
    {timestamps:true,versionKey:false})

export default mongoose.models.category || model("category",Category)