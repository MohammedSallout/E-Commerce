import { getUsersQuery } from "../../queries/index.js";

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await getUsersQuery();
    res.json({
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllUsers;
