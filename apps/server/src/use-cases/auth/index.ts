import { UnauthorizedError } from "../../domain/errors/unauthorized-error.js";
import { User } from "../../domain/entities/user.js";

interface LoginResult {
  token: string;
  user: { id: string; email: string; name: string };
}

export interface IUserRepository {
  findUserByEmail(email: string): Promise<User | null>;
}

export interface IPasswordHasher {
  compare(password: string, hashed: string): Promise<boolean>;
}

export interface ITokenService {
  generateToken(payload: { userId: string }): string;
}

/**
 * Authenticates a user by verifying credentials and generating a JWT token.
 *
 * @param email - User's email address
 * @param password - User's plaintext password
 * @param userRepository - Implementation to fetch users from data source
 * @param passwordHasher - Service to compare hashed passwords
 * @param tokenService - Service to generate authentication tokens
 *
 * @throws UnauthorizedError if credentials are invalid
 *
 * @returns An object containing the JWT token and user info (without sensitive data)
 */
export const loginUser = async (
  email: string,
  password: string,
  userRepository: IUserRepository,
  passwordHasher: IPasswordHasher,
  tokenService: ITokenService
): Promise<LoginResult> => {
  // Fetch user by email
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new UnauthorizedError("Invalid email or password.");
  }

  //Validate password
  const isPasswordValid = await passwordHasher.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    throw new UnauthorizedError("Invalid email or password");
  }

  // Generate JWT token
  const token = tokenService.generateToken({ userId: user.id });

  // Return user data excluding sensitive info
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};
