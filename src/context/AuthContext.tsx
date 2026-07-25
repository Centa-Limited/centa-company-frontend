import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  const [user, setUser] = useState<User | null>(() => {
    const data = localStorage.getItem("user");

    return data ? JSON.parse(data) : null;
  });

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem("accessToken", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));

    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    if (token) setToken(token);

    if (user) setUser(JSON.parse(user));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}