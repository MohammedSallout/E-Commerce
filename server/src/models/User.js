import sequelize from "../database/config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userType: {
    type: DataTypes.ENUM("regular", "admin"),
    defaultValue: "regular",
    allowNull: false,
  },
});

export default User;
