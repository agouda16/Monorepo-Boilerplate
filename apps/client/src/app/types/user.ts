export interface IUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: "user" | "admin" | "moderator"; // optional roles
  createdAt?: string;
  updatedAt?: string;
}
