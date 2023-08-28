import { getProductsQuery } from "../../queries/index.js";

const getProducts = async (_req, res, next) => {
  try {
    const products = await getProductsQuery();
    res.json({
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export default getProducts;
