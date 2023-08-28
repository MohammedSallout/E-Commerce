import { Product, Category } from "../../models/index.js";

const getProductsQuery = async () => {
  const products = await Product.findAll({
    attributes: [
      "productId",
      "image",
      "title",
      "description",
      "price",
      "details",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: Category,
        attributes: ["name"],
      },
    ],
  });
  return products;
};

export default getProductsQuery;
