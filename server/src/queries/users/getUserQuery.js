import { User } from "../../models/index.js";

const getUserQuery = async (id) => {
  const user = await User.findOne({
    where: { userId: id },
    attributes: [
      "userId",
      "username",
      "email",
      "userType",
      "createdAt",
      "updatedAt",
    ],
  });

  return user;
};

export default getUserQuery;
