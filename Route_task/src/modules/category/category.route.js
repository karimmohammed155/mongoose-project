import { Router } from "express";
import * as category_controller from "./controller/category.controller.js"
import { error_handle } from "../../middlewares/error.handle.js";
import { auth } from "../../middlewares/auth.middleware.js";
const category_router=Router()

category_router.post("/create",auth(),error_handle(category_controller.create_category))
category_router.get("/read",auth(),error_handle(category_controller.read_categories))
category_router.patch("/update/:_id",auth(),error_handle(category_controller.update_category))
category_router.delete("/delete/:_id",auth(),error_handle(category_controller.delete_category))
category_router.get("/filter",auth(),error_handle(category_controller.filtering_by_name))
category_router.get("/sort",auth(),error_handle(category_controller.sorting_by_name))

export default category_router