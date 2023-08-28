import { Product, Category } from "../../models/index.js";

const categoryProductsQuery = async (id) => {
  const categoryProducts = await Product.findAll({
    where: { categoryId: id },
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
  return categoryProducts;
};

export default categoryProductsQuery;
