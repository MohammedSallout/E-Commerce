import { addCategoryQuery } from "../../queries/index.js";
import { validateCategory } from "../../validation/index.js";

const addCategory = async (req, res, next) => {
  try {
    const { name, img } = await validateCategory.validate(req.body);

    const newCategory = await addCategoryQuery({ name, img });

    res.status(201).json({
      message: "Category Created Successfully",
      data: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

export default addCategory;
