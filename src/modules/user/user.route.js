import { Router } from "express";
import controller from "./user.controller.js";
const userRouter = Router();

userRouter
  .get("/", controller.get)
  .get("/:id", controller.get)
  .post("/", controller.post)
  .put("/:id", controller.put)
  .delete("/:id", controller.delete);

export default userRouter;