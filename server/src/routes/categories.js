import express from "express";
import {
  getCategories,
  getCategory,
  addCategory,
} from "../controllers/index.js";

const categoriesRouter = express.Router();
categoriesRouter.get("/", getCategories);
categoriesRouter.get("/:categoryId", getCategory);
categoriesRouter.post("/", addCategory);

export default categoriesRouter;
