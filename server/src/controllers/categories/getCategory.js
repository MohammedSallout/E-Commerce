import { CustomError } from "../../helpers/index.js";
import { getCategoryQuery } from "../../queries/index.js";
import { validateCategoryId } from "../../validation/index.js";

const getCategory = async (req, res, next) => {
  try {
    const { categoryId } = await validateCategoryId.validate(req.params);
    const category = await getCategoryQuery(Number(categoryId));
    if (category !== null) {
      res.json({ data: category });
    } else {
      throw new CustomError(404, "category not found");
    }
  } catch (err) {
    next(err);
  }
};
export default getCategory;
