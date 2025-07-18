// src/app/types/auth.ts

import type { IUser } from "./user";

export interface AuthSession {
  token: string;
  user: IUser;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;
}
