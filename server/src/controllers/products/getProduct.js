import { CustomError } from "../../helpers/index.js";
import { getProductQuery } from "../../queries/index.js";
import { validateProductId } from "../../validation/index.js";

const getProduct = async (req, res, next) => {
  try {
    const { productId } = await validateProductId.validate(req.params);
    const product = await getProductQuery(Number(productId));
    if (product !== null) {
      res.json({ data: product });
    } else {
      throw new CustomError(404, "product not found");
    }
  } catch (err) {
    next(err);
  }
};
export default getProduct;
