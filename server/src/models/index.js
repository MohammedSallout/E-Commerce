import User from "./User.js";
import Category from "./Category.js";
import Product from "./Product.js";
import Cart from "./Cart.js";

Category.hasMany(Product, { foreignKey: 'categoryId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Product.belongsTo(Category, { foreignKey: 'categoryId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

export { User, Category, Product, Cart }