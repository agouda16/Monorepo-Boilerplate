// shared/lib/auth/authprovider.types.ts

import type { PropsWithChildren } from "react";
import type { IUser } from "@/app/types/auth";

/**
 * Props for the AuthProvider component.
 */
export interface AuthProviderProps extends PropsWithChildren {
  className?: string;
}

/**
 * Represents the internal auth store (used in state).
 */
export interface AuthProviderStore {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;
}

/**
 * Represents the context API exposed to consumers.
 */
export interface AuthProviderContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;

  /**
   * Authenticates the user with a token and user data.
   */
  authenticate: (token: string, user: IUser) => void;

  /**
   * Signs out the current user.
   */
  logout: () => void;
}
