import mongoose from "mongoose";

export const db_connection=async()=>{
    try
    {
        await mongoose.connect("mongodb://localhost:27017/mongoose_8");
        console.log("db connected");
    }
    catch(error)
    {
        console.log("error in connection");
    }

}