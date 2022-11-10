const mongoose = require("mongoose");
const ErrorResponse = require("../../utils/errorResponse");

exports.errorConverter = (err, req, res, next) => {
  let statusCode, message;
  let error = err;
  if (!(err instanceof ErrorResponse)) {
    statusCode = err.statusCode || err instanceof mongoose.Error ? 401 : 500;
    message =
      err.message || err instanceof mongoose.Error
        ? "Bad request error"
        : "Internal server error";
    error = new ErrorResponse(statusCode, message);
  }
  next(error);
};

exports.errorHandler = (err, req, res, next) => {
  const { message, statusCode } = err;
  const response = {
    message: message,
    statusCode: statusCode || 500,
  };
  res.status(statusCode).json(response);
};
