import http from './api'
import type { LoginPayload, RegisterPayload, AuthResponse, AuthUser } from '../types/auth'

// Login: kirim email+password, terima token, lalu simpan token ke localStorage
export async function login(payload: LoginPayload) {
  const response = await http.post<AuthResponse>('/auth/login', payload)
  localStorage.setItem('access_token', response.data.accessToken)
  return response.data
}

// Register akun baru
export async function register(payload: RegisterPayload) {
  const response = await http.post<AuthResponse>('/auth/register', payload)
  return response.data
}

// Logout: hapus token dari localStorage (dan opsional kasih tau server)
export async function logout() {
  await http.post('/auth/logout')
  localStorage.removeItem('access_token')
}

// Ambil data user yang sedang login (biasa dipanggil saat pertama kali app dibuka)
export async function getCurrentUser() {
  const response = await http.get<AuthUser>('/auth/me')
  return response.data
}

// Cek cepat apakah user sudah login (berdasarkan ada/tidaknya token)
export function isAuthenticated(): boolean {
  return !!localStorage.getItem('access_token')
}
