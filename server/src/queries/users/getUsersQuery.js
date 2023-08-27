import { User } from "../../models/index.js";

const getUsersQuery = async () => {
  const users = await User.findAll({
    attributes: ["userId", "username", "email", "userType"],
  });
  return users;
};

export default getUsersQuery;
