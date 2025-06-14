import { RateLimiterMemory } from "rate-limiter-flexible";
import { Request, Response, NextFunction, RequestHandler } from "express";

const rateLimiter = new RateLimiterMemory({
  points: 100, // 100 requests
  duration: 60, // per 60 seconds per IP
  keyPrefix: "rlflx", // Optional: helpful if you switch to Redis later
});

const apiRateLimiter: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const ip = req.ip;

    if (!ip) {
      res.status(400).json({ message: "Unable to determine IP address." });
      return;
    }

    await rateLimiter.consume(ip); // or use req.headers['x-forwarded-for']
    next();
  } catch (_err: unknown) {
    res.status(429).json({ message: "Too many requests. Please try again later." });
  }
};

export default apiRateLimiter;
