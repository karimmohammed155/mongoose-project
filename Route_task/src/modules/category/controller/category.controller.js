import categoryModel from "../../../../Database/models/category.model.js";
import { Error_handler_class } from "../../../utils/error-class.utils.js";

//create category api
export const create_category=async(req,res,next)=>{
    const{_id}=req.authUser;
    const{name}=req.body
    // create category
    const new_category=await categoryModel.create({name,user:_id})
    // response
    res.status(201).json({message:"new category is created",new_category})
}

// read categories api
export const read_categories=async(req,res,next)=>{
    // find all categories
    const all_categories=await categoryModel.find().populate({path:"user"})
    // response
    res.status(200).json({message:"all categories found",all_categories})
}

// update category api
export const update_category=async(req,res,next)=>{
    const{_id}=req.params;
    const{name}=req.body;
    // updated specific category
    const updated=await categoryModel.findByIdAndUpdate({_id},{name},{new:true})
    // check if not updated
    if(!updated){
        return next(new Error_handler_class(
            "category is not updated",
            404,
            "category is not updated",
            "update categories api",
            {updated}
        ))
    }
    // response
    res.status(200).json({message:"category updated",updated})
}

// delete category api
export const delete_category=async(req,res,next)=>{
    const{_id}=req.params
    // delete specific category
    const del_category=await categoryModel.findByIdAndDelete(_id)
    // check if not deleted
    if(!del_category){
        return next(new Error_handler_class(
            "category is not found",
            404,
            "category is not found",
            "delete  api",
            {del_category}
        ))
    }
    // response
    res.status(200).json({message:"category deleted",del_category})
}

// filter categories by name api
export const filtering_by_name=async(req,res,next)=>{
    const{name}=req.query
    // filter all categories by name
    const all_categories=await categoryModel.find({name})
    // response
    res.status(200).json({message:"all categories found",all_categories})
}

// sort categories by name api
export const sorting_by_name=async(req,res,next)=>{
    // sort all categories by name
    const all_categories=await categoryModel.find().sort({name:1}) // sort asc
    // response
    res.status(200).json({message:"all categories found",all_categories})
}