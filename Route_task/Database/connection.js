import mongoose from "mongoose"

const db_connection=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Route_task")
        console.log("db connected")
    } catch (error) {
        console.log("connection failed",error);
    }
}

export default db_connection