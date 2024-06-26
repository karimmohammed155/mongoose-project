import authorModel from "../../../../database/models/author.model.js";

export const add_author=async(req,res)=>{
    const{name,bio,birth_date,books}=req.body;
    const author_instance=new authorModel(
        {
            name,
            bio,
            birth_date,
            books
        }
    )
    const create_author=await author_instance.save()
    res.json(create_author)
}

export const update_author=async(req,res)=>{
    try{
    const{name,bio,birth_date,books}=req.body;
    const{_id}=req.params;
    const exist=await authorModel.findById(_id)
    exist.name= name;
    exist.bio=bio;
    exist.birth_date=birth_date;
    exist.books=books;
    const updated=await exist.save()
    res.json(updated)
    }
    catch(error){
        console.log(error)
    }
}

export const delete_author=async(req,res)=>{
    const{_id}=req.params;
    const deleted=await authorModel.findByIdAndDelete(_id)
    res.json(deleted)
}

export const get_all_authors=async(req,res)=>{
    const all=await authorModel.find().populate([{path:"books"}])
    res.json(all)
}

export const get_one=async(req,res)=>{
    const{_id}=req.params
    const one=await authorModel.findById(_id).populate([{path:"books"}])
    res.json(one)
}

export const search=async(req,res)=>{
    const search_name=await authorModel.find().select("name -_id")
    res.json(search_name)
}