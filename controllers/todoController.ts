import { Request, Response } from "express";
class TodoController {
  getAllTodos = (req: Request, res: Response) => {
    res.status(200).json({
      status: "sucsses",
      result: "get all todos",
    });
  };
  getTodo = (req: Request, res: Response) => {
    res.status(200).json({
      status: "success",
      result: "get todo",
    });
  };
  postTodo = (req:Request,res:Response) => {
    res.status(200).json({
      status:"posted"
    })
  }
  updateTodo = (req: Request, res: Response) => {
    res.status(200).json({ status: "updated" });
  };
  deleteAllTodos = (req: Request, res: Response) => {
    res.status(200).json({ status: "deleted" });
  };
  deleteTodo = (req: Request, res: Response) => {
    res.status(200).json({ status: "deleted" });
  };
  unavilable = (req: Request, res: Response) => {
    res.status(404).json({
      status: "unavilable methode",
    });
  };
}
export default TodoController;
