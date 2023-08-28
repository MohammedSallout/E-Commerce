import express from "express";
import {
  getProducts,
  getProduct,
  getCategoryProducts,
} from "../controllers/index.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:productId", getProduct);
productsRouter.get("/category/:categoryId", getCategoryProducts);

export default productsRouter;
