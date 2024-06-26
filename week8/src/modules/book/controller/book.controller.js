import bookModel from "../../../../database/models/book.model.js";

export const add_book=async(req,res)=>{
    const{title,content,author,date}=req.body;
    const book_instance=new bookModel(
        {
            title,
            content,
            author,
            date
        }
    )
    const create_book=await book_instance.save()
    res.json(create_book)
}

export const update_book=async(req,res)=>{
    const{title,content,author,date}=req.body;
    const{_id}=req.params;
    const exist=await bookModel.findById(_id)
    exist.title= title;
    exist.content=content;
    exist.author=author;
    exist.date=date;
    const updated=await exist.save()
    res.json(updated)
    
}

export const delete_book=async(req,res)=>{
    const{_id}=req.params;
    const deleted=await bookModel.findByIdAndDelete(_id)
    res.json(deleted)
}

export const get_all=async(req,res)=>{
    const all=await bookModel.find()
    res.json(all)
}

export const get_one=async(req,res)=>{
    const{_id}=req.params
    const one=await bookModel.findById(_id)
    res.json(one)
}

export const search=async(req,res)=>{
    const search_title=await bookModel.find().select("title -_id")
    res.json(search_title)
}