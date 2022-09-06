import { Router } from "express";
import UserController from "./app/controller/UserController";

const routes = new Router();

Router.post("/users", UserController.store);

export default routes;
