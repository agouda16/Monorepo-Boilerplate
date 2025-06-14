import { RateLimiterMemory } from "rate-limiter-flexible";
import { Request, Response, NextFunction, RequestHandler } from "express";

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 attempts
  duration: 300, // per 5 minutes
  keyPrefix: "login",
});

const loginRateLimiter: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const ip = req.ip ?? "unknown";
  const username = req.body?.username ?? "unknown";
  const key = `${ip}_${username}`;

  try {
    await rateLimiter.consume(key);
    next();
  } catch (_err: unknown) {
    res.set("Retry-After", String(300)); // 5 minutes
    res.status(429).json({ message: "Too many login attempts. Please try again later." });
  }
};

export default loginRateLimiter;
