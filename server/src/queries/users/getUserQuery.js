import { User } from "../../models/index.js";

const getUserQuery = async (id) => {
  const user = await User.findOne({
    where: { userId: id },
    attributes: ["userId", "username", "email", "userType"],
  });

  return user;
};

export default getUserQuery;
