import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getProfile } from "../services/auth.service";
import type { AuthUser } from "../types/auth";

type AuthContextType = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  const [user, setUser] = useState<AuthUser | null>(null);

  const [loading, setLoading] = useState(true);

  

  // ========================================
  // LOGIN
  // ========================================

  const login = (
    newToken: string,
    newUser: AuthUser
  ) => {
    localStorage.setItem(
      "accessToken",
      newToken
    );

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    setToken(newToken);
    setUser(newUser);
  };

  // ========================================
  // LOGOUT
  // ========================================

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  // ========================================
  // REFRESH PROFILE
  // ========================================

  const refreshProfile = async (): Promise<void> => {
    try {
      const response = await getProfile();

      setUser(response.data);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );
    } catch (error) {
      console.error(
        "REFRESH PROFILE ERROR:",
        error
      );

      throw error;
    }
  };

  // ========================================
  // INITIALIZE AUTH
  // ========================================

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken =
        localStorage.getItem("accessToken");

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        setToken(storedToken);

        await refreshProfile();
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}