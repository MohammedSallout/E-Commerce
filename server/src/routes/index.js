import express from "express";
import usersRouter from "./users.js";
import categoriesRouter from "./categories.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);

export default router;
