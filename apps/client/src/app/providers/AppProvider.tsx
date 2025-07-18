import type { ReactNode } from "react";
import { AuthProvider } from "@/features/auth/context/AuthProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
