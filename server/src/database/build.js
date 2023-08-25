import dotenv from "dotenv";
import sequelize from "./config.js";
import fakeData from "./fakeData.js";
import { User, Category, Product, Cart } from "../models/index.js";

dotenv.config();
const SEED = process.env.SEED;

const buildTables = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(fakeData.users);
    await Category.bulkCreate(fakeData.categories);
    await Product.bulkCreate(fakeData.products);
    await Cart.bulkCreate(fakeData.carts);
  } catch (error) {
    console.log(`error in building data: ${String(error)}`);
  }
};

if (SEED !== null && SEED !== undefined) {
  buildTables()
    .then(() => {
      console.log("Database built successfully");
    })
    .catch((err) => {
      console.log(`error in building data: ${String(err)}`);
    });
}

export default buildTables;
