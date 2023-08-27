import { getCategoriesQuery } from "../../queries/index.js";

const getCategories = async (_req, res, next) => {
  try {
    const categories = await getCategoriesQuery();
    res.json({
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

export default getCategories;
