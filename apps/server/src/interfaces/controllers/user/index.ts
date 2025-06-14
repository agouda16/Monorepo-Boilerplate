import { Router, Request, Response, NextFunction } from "express";
import { registerUser } from "../../../use-cases/user/index.js";
import logger from "../../../infrastructure/logger/index.js";
import { BadRequestError } from "../../../domain/errors/index.js";
import { sendSuccess } from "../../utils/response-handler.js";
import { BcryptPasswordHasher } from "../../../infrastructure/services/bcrypt-password-hasher.js";

const router = Router();

/**
 * POST /api/users
 * Creates a new user.
 */
router.post("/", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      logger.warn("Missing name or email in request body");
      throw new BadRequestError("Name, email and password are required");
    }

    const passwordHasher = new BcryptPasswordHasher();
    const user = await registerUser(
      { name, email, password },
      passwordHasher // dependency injection
    );

    logger.info(`User created: ${user.id}`);
    sendSuccess(res, {
      data: user,
      message: "User created successfully",
      metadata: {
        requestId: req.headers["x-request-id"],
        durationMs: Date.now() - res.locals.startTime,
      },
      statusCode: 201,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
