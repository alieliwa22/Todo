import { Request, Response, Router } from "express";
import TodoController from "../controllers/todoController";
const Route = Router();
const controller = new TodoController();

Route.route("/")
  .get(controller.getAllTodos)
  .post(controller.postTodo)
  .put(controller.unavilable)
  .delete(controller.deleteAllTodos);
Route.route("/:id")
  .get(controller.getTodo)
  .post(controller.unavilable)
  .put(controller.updateTodo)
  .delete(controller.deleteTodo);
export default Route;
