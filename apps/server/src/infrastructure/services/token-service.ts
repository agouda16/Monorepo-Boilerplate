import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
};
