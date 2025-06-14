export class UnauthorizedError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
