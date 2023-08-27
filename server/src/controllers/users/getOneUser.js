import { CustomError } from "../../helpers/index.js";
import { getUserQuery } from "../../queries/index.js";
import { validateUserId } from "../../validation/index.js";

const getOneUser = async (req, res, next) => {
  try {
    const { userId } = await validateUserId.validate(req.params);
    const user = await getUserQuery(Number(userId));
    if (user !== null) {
      res.json({ data: user });
    } else {
      throw new CustomError(404, "user not found");
    }
  } catch (err) {
    next(err);
  }
};
export default getOneUser;
