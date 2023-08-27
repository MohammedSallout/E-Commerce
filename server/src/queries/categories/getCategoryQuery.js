import { Category } from "../../models/index.js";

const getCategoryQuery = async (id) => {
  const category = await Category.findOne({
    where: { categoryId: id },
  });

  return category;
};

export default getCategoryQuery;
