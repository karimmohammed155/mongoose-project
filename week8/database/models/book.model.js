import mongoose from "mongoose";
const{Schema ,model}= mongoose;

const book_schema=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    {timestamps:true})

export default mongoose.models.book || model("book",book_schema);