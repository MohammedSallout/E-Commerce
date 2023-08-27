import express from "express";
import {
  getAllUsers,
  getOneUser,
  signup,
  login,
  logout,
} from "../controllers/index.js";

const usersRouter = express.Router();
usersRouter.get("/", getAllUsers);
usersRouter.get("/:userId", getOneUser);
usersRouter.post("/signup", signup);
usersRouter.post("/login", login);
usersRouter.delete("/logout", logout);

export default usersRouter;
