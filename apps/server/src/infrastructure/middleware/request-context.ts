import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

export const requestContext = (req: Request, res: Response, next: NextFunction): void => {
  res.locals.traceId = req.headers["x-trace-id"] || uuidv4();
  res.locals.locale = req.headers["accept-language"] || "en-US";
  res.locals.startTime = Date.now();
  next();
};
