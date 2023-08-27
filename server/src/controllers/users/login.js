import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validateLogin } from "../../validation/index.js";
import { loginQuery } from "../../queries/index.js";
import { CustomError } from "../../helpers/index.js";
import dotenv from "dotenv";

dotenv.config();

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  try {
    const { email, password } = await validateLogin.validate(req.body);

    const userData = await loginQuery({ email });

    if (userData !== null) {
      const { userId, email, password: hashedPassword, userType } = userData;

      const isPasswordTrue = await bcrypt.compare(password, hashedPassword);

      if (isPasswordTrue) {
        const payload = {
          userId,
          email,
          userType,
        };

        const token = jwt.sign(payload, SECRET_KEY);

        res
          .cookie("token", token, { httpOnly: true })
          .json({ message: "Login successfully" });
      } else {
        throw new CustomError(400, "Wrong Password");
      }
    } else {
      throw new CustomError(401, "Please create an account first");
    }
  } catch (error) {
    next(error);
  }
};

export default login;
