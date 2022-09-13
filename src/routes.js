import { Router } from "express";
import User from "./app/controller/models/Users";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Rogério Peixoto",
    email: "rogerioalvespeixoto@hotmail.com",
    password_hash: "1234567890",
  });
  return res.Json(user);
});

export default routes;
