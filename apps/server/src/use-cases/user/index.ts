import { v4 as uuidv4 } from "uuid";
import { userRepository } from "../../infrastructure/repositories/index.js";
import { User } from "../../domain/entities/user.js";
import logger from "../../infrastructure/logger/index.js";
import { BadRequestError } from "../../domain/errors/bad-request-error.js";
import { PasswordHasher } from "../../domain/ports/password-hasher.js";

// Define the input DTO
interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

/**
 * Handles business logic for registering a user.
 */
export const registerUser = async (
  input: RegisterUserInput,
  passwordHasher: PasswordHasher
): Promise<Omit<User, "passwordHash">> => {
  const { name, email, password } = input;

  if (!name || !email || !password) {
    throw new BadRequestError("Name, email and password are required");
  }

  const passwordHash = await passwordHasher.hash(password);

  const newUser: User = {
    id: uuidv4(),
    name,
    email,
    passwordHash,
  };

  logger.info("Registering new user...");
  await userRepository.createUser(newUser);

  // Do not return the passwordHash to the controller
  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
};
