import CustomError from "./CustomError.js";

const serverError = (err, _req, res, _next) => {
  const { status, message, errors } = err;

  if (err.name === "ValidationError") {
    return res.status(400).json({
      data: { errors },
    });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  if (err instanceof CustomError) {
    if (status !== undefined) {
      return res.status(status).json({
        message,
      });
    }
  }

  if (
    err.message &&
    err.message.includes("invalid input syntax for type integer")
  ) {
    return res.status(400).json({
      message: "Please Enter a valid id number",
    });
  }

  if (err.message && err.message.includes("is out of range for type integer")) {
    return res.status(400).json({
      message: "Please Enter a valid id number",
    });
  }

  if (err.original && err.original.detail.includes("is not present in table")) {
    return res.status(400).json({
      message: "The post you are looking doesn't exist",
    });
  }

  if (err.message && err.message.includes("violates foreign key constraint")) {
    return res.status(400).json({
      message: "Bad Request, please try again later",
    });
  }

  return res.status(500).json({
    data: {
      message: "Internal server error",
    },
  });
};

export default serverError;
