import { User } from "../../models/index.js";

const loginQuery = async (userData) => {
  const { email } = userData;
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

export default loginQuery;
