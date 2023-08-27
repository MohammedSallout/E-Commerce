import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { signupQuery } from "../../queries/index.js";
import { validateSignup } from "../../validation/index.js";

dotenv.config();

const { SECRET_KEY } = process.env;

const signToken = (userPayload) => {
  const token = jwt.sign(
    {
      userId: userPayload.userId,
      email: userPayload.email,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
  return token;
};

const signup = async (req, res, next) => {
  try {
    const { username, email, password, userType } =
      await validateSignup.validate(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await signupQuery({
      username,
      email,
      password: hashedPassword,
      userType,
    });

    const token = signToken({ userId: newUser.userId, email: newUser.email });

    res
      .cookie("token", token, { httpOnly: true })
      .status(201)
      .json({
        message: "User Created Successfully",
        data: {
          userId: newUser.userId,
          username: newUser.username,
          email: newUser.email,
          userType: newUser.userType,
        },
      });
  } catch (error) {
    next(error);
  }
};

export default signup;
