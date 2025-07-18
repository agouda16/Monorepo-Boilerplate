import { useContext } from "react";
import { AuthContext } from "@/features/auth/context/AuthContext";
import type { AuthProviderContextType } from "../context/AuthProvider.types";

export function useAuth(): AuthProviderContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
