import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { Provider } from "react-redux";
import type { PropsWithChildren } from "react";
import type { IUser } from "@/app/types";
import type {
  AuthProviderContextType,
  AuthProviderStore,
  AuthProviderProps,
} from "./AuthProvider.types";

export function AuthProvider({
  children,
}: PropsWithChildren<AuthProviderProps>) {
  const [store, setStore] = useState<AuthProviderStore>({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  const authenticate = (token: string, user: IUser) => {
    setStore({ isAuthenticated: true, token, user });
  };

  const logout = () => {
    setStore({ isAuthenticated: false, token: null, user: null });
  };

  const value: AuthProviderContextType = {
    ...store,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
