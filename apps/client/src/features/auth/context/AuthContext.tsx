import { createContext } from "react";
import type { AuthProviderContextType } from "./AuthProvider.types";

export const AuthContext = createContext<AuthProviderContextType | null>(null);
