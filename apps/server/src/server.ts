import express, { Application, Request, Response } from "express";
import cors from "./infrastructure/middleware/cors.js";
import helmet from "./infrastructure/middleware/helmet.js";
import compression from "./infrastructure/middleware/compression.js";
import routes from "./interfaces/controllers/index.js";
import { errorHandler } from "./interfaces/middleware/error-handler.js";
import { requestContext } from "./infrastructure/middleware/request-context.js";
import apiRateLimiter from "./infrastructure/middleware/rate-limiter.js";
import requestLogger from "./infrastructure/middleware/request-logger.js";

const app: Application = express();

// Security & performance middleware
app.use(cors);
app.use(helmet);
app.use(apiRateLimiter);
app.use(compression);

// Custom middleware
app.use(express.json());
app.use(requestContext);
app.use(requestLogger);

// Routes
app.use("/api", routes);

// Health check (optional)
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "API is running" });
});

// Apply rate limiter middleware globally (all routes)

// Global error handler (must be after all routes)
app.use(errorHandler);

export default app;
