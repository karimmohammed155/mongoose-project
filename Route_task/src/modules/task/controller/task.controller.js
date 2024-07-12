import taskModel from "../../../../Database/models/task.model.js";
import { Error_handler_class } from "../../../utils/error-class.utils.js";

//create task api
export const create_task=async(req,res,next)=>{
    const{_id}=req.authUser;
    const{type,body,items,shared,category}=req.body
    // create task
    const new_task=await taskModel.create({type,body,items,shared,category,user:_id})
    // response
    res.status(201).json({message:"new task is created",new_task})
}

// read tasks api
export const read_tasks=async(req,res,next)=>{
    // find all tasks
    const all_tasks=await taskModel.find().populate({path:"category"}).populate({path:"user"})
    // response
    res.status(200).json({message:"all tasks found",all_tasks})
}

// update task api
export const update_task=async(req,res,next)=>{
    const{_id}=req.params;
    const{type,body,items,shared,category}=req.body;
    // updated specific task
    const updated=await taskModel.findByIdAndUpdate(
        {_id},
        {type,body,items,shared,category},
        {new:true})
    // check if not updated
    if(!updated){
        return next(new Error_handler_class(
            "task is not updated",
            404,
            "task is not updated",
            "update task api",
            {updated}
        ))
    }
    // response
    res.status(200).json({message:"task updated",updated})
}

// delete task api
export const delete_task=async(req,res,next)=>{
    const{_id}=req.params
    // delete specific task
    const del_task=await taskModel.findByIdAndDelete(_id)
    // check if not deleted
    if(!del_task){
       return next(new Error_handler_class(
            "task is not found",
            404,
            "task is not found",
            "delete  api",
            {del_task}
        ))
    }
    // response
    res.status(200).json({message:"task deleted",del_task})
} 

// filter tasks by shared option api
export const filter_by_option=async(req,res,next)=>{
    const{shared}=req.query
    // filter all tasks by shared option
    const all_tasks=await taskModel.find({shared})
    // response
    res.status(200).json({message:"all tasks found",all_tasks})
}

// sort tasks by shared option api
export const sort_by_option=async(req,res,next)=>{
    // sort all tasks by shared option
    const all_tasks=await taskModel.find().sort({shared:1})
    // response
    res.status(200).json({message:"all tasks found",all_tasks})
}