import { Router } from "express";
import * as book_controller from "./controller/book.controller.js";
const book_router=Router()

book_router.post("/add",book_controller.add_book)
book_router.patch("/update/:_id",book_controller.update_book)
book_router.delete("/delete/:_id",book_controller.delete_book)
book_router.get("/all",book_controller.get_all)
book_router.get("/one/:_id",book_controller.get_one)
book_router.get("/search",book_controller.search)
export default book_router
