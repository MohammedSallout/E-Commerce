import { Category } from "../../models/index.js";

const addCategoryQuery = async (categoryData) => {
  const newCategory = await Category.create({ ...categoryData });
  return newCategory;
};

export default addCategoryQuery;
