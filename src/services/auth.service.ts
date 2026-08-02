import http from "./api";
import type {
  LoginPayload,
  AuthResponse,
  ProfileResponse,
} from "../types/auth";

export async function login(
  payload: LoginPayload
): Promise<AuthResponse> {
  const { data } = await http.post<AuthResponse>(
    "/auth/login",
    payload
  );

  return data;
}

export async function getProfile(): Promise<ProfileResponse> {
  const { data } = await http.get<ProfileResponse>(
    "/auth/profile"
  );

  return data;
}

export function logout(): void {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}