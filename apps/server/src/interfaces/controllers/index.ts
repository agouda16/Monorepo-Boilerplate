import { Router } from "express";
import userController from "./user/index.js";
import authController from "./auth/index.js";
import loginRateLimiter from "../../infrastructure/middleware/rate-limiter-login.js";

const router = Router();

router.use("/users", userController);
router.use("/login", loginRateLimiter, authController);

export default router;
