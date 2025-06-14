import { Request, Response, NextFunction } from "express";
import { AppError } from "../../domain/errors/app-error.js";
import logger from "../../infrastructure/logger/index.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    logger.warn(`[AppError] ${err.name}: ${err.message}`);
    res.status(err.statusCode).json({
      error: err.message,
      type: err.name,
    });
  } else {
    logger.error(`[UnhandledError] ${err.name || "Error"}: ${err.message}`);
    res.status(500).json({
      error: "Internal server error",
      type: "InternalServerError",
    });
  }
};
