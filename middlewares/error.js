
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (error, req, res, next) => {
  error.message = error.message || "Internal server error ";
  error.statusCode = error.statusCode || 500;

  if (error.cod === 11000) {
    const message = `${Object.keys(error.keyValue)} already exists`;
    err = new ErrorHandler(message, 400);
  }
  if (error.name === "JsonWebTokenError") {
    const message = `JSON Web Token is Invalid.`;
    err = new ErrorHandler(message, 400);
  }
  if (error.name === "TokenExpireError") {
    const message = `JSON Web Token is Expired.`;
    err = new ErrorHandler(message, 400);
  }
  if (error.name === "CastError") {
    const message = `Invalid ${error.path}`;
    err = new ErrorHandler(message, 400);
  }

  const errorMessage = error.errors
    ? Object.values(error.errors)
        .map((error) => error.message)
        .join("")
    : error.message;

    return res.status(error.statusCode).json({
        success:false,
        message: errorMessage
    })
};
export default ErrorHandler;
