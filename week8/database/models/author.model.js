import mongoose, { SchemaTypes } from "mongoose";
const{Schema,model}=mongoose

const author_schema=new Schema(
{
    name:{
        type:String,
        required:true
    },
    bio:String,
    birth_date:Date,
    books:[
        {
            type:Schema.Types.ObjectId,
            ref:"book"
        }
    ]
},
{timestamps:true});

export default mongoose.models.author || model("author",author_schema)