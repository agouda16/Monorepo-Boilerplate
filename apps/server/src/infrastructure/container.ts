// src/infrastructure/container.ts
import { BcryptPasswordHasher } from "./services/bcrypt-password-hasher.js";
import { loginUser } from "../use-cases/auth/index.js";
import { userRepository } from "./repositories/index.js";
import { generateToken } from "./services/token-service.js";

export const authControllerDeps = {
  login: (email: string, password: string) =>
    loginUser(email, password, userRepository, new BcryptPasswordHasher(), {
      generateToken,
    }),
};
