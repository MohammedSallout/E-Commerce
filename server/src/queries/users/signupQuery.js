import { User } from "../../models/index.js";
import { CustomError } from "../../helpers/index.js";

const signupQuery = async ({ username, email, password, userType }) => {
  const previousUser = await User.findOne({ where: { email } });
  if (previousUser != null) {
    throw new CustomError(400, "Email already exists");
  }

  const newUser = await User.create({ username, email, password, userType });

  return newUser;
};

export default signupQuery;
