import { Product, Category } from "../../models/index.js";

const getProductQuery = async (id) => {
  const product = await Product.findOne({
    where: { productId: id },
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

  return product;
};

export default getProductQuery;
