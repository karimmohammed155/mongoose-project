import { Router } from "express";
import * as task_controller from "./controller/task.controller.js"
import { error_handle } from "../../middlewares/error.handle.js";
import { auth } from "../../middlewares/auth.middleware.js";
const task_router=Router()

task_router.post("/create",auth(),error_handle(task_controller.create_task))
task_router.get("/read",auth(),error_handle(task_controller.read_tasks))
task_router.patch("/update/:_id",auth(),error_handle(task_controller.update_task))
task_router.delete("/delete/:_id",auth(),error_handle(task_controller.delete_task))
task_router.get("/filter",auth(),error_handle(task_controller.filter_by_option))
task_router.get("/sort",auth(),error_handle(task_controller.sort_by_option))

export default task_router