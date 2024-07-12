import { Router } from "express";
import * as user_controller from "./controller/user.controller.js"
import { error_handle } from "../../middlewares/error.handle.js";
const user_router=Router()

user_router.post("/sign_up",error_handle(user_controller.sign_up))
user_router.post("/sign_in",error_handle(user_controller.sign_in))

export default user_router