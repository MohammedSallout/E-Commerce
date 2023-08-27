import { Category } from "../../models/index.js";

const getCategoriesQuery = async () => {
  const categories = await Category.findAll();
  return categories;
};

export default getCategoriesQuery;
