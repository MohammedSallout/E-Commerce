import sequelize from "../database/config.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category", {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
