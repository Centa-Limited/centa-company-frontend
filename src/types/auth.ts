
export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "SUPER_ADMIN";
  createdAt: string;
}

export interface LoginData {
  token: string;
  user: AuthUser;
}

export interface AuthResponse {
  status: "success" | "error";
  message: string;
  data: LoginData;
}

export interface ProfileResponse {
  status: "success" | "error";
  data: AuthUser;
}