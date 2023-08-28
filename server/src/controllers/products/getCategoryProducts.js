import { CustomError } from "../../helpers/index.js";
import { categoryProductsQuery } from "../../queries/index.js";
import { validateCategoryId } from "../../validation/index.js";

const getCategoryProducts = async (req, res, next) => {
  try {
    const { categoryId } = await validateCategoryId.validate(req.params);
    const categoryProducts = await categoryProductsQuery(Number(categoryId));
    if (categoryProducts !== null) {
      res.json({ data: categoryProducts });
    } else {
      throw new CustomError(404, "category not found");
    }
  } catch (err) {
    next(err);
  }
};
export default getCategoryProducts;
