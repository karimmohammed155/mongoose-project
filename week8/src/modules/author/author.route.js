import { Router } from "express";
import * as author_controller from "./controller/author.controller.js";
const author_router=Router()

author_router.post("/add",author_controller.add_author)
author_router.patch("/update/:_id",author_controller.update_author)
author_router.delete("/delete/:_id",author_controller.delete_author)
author_router.get("/all",author_controller.get_all_authors)
author_router.get("/one/:_id",author_controller.get_one)
author_router.get("/search",author_controller.search)
export default author_router