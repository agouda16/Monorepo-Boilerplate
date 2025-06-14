import { Router, Request, Response, NextFunction } from "express";
import { BadRequestError } from "../../../domain/errors/index.js";
import { sendSuccess } from "../../utils/response-handler.js";
import { authControllerDeps } from "../../../infrastructure/container.js";
import { LoginResult } from "../../../use-cases/auth/types.js"; // <-- Custom type (optional)

const router = Router();

router.post(
  "/",
  async (
    req: Request<{}, {}, { email: string; password: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new BadRequestError("Email and password are required.");
      }

      const result: LoginResult = await authControllerDeps.login(email, password);

      sendSuccess(res, {
        data: result,
        message: "Login successful",
        statusCode: 200,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
