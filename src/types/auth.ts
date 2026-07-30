// Data yang dikirim saat login
export interface LoginPayload {
  email: string
  password: string
}

// Data yang dikirim saat register akun baru
export interface RegisterPayload {
  name: string
  email: string
  password: string
}

// Bentuk data user yang disimpan di dalam response auth
export interface AuthUser {
  id: string
  name: string
  email: string
  role: string
}

// Response yang dikembalikan backend setelah login/register berhasil
export interface AuthResponse {
  accessToken: string
  user: AuthUser
}
