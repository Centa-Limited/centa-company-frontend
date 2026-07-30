import http from './api'
import type { User, UpdateUserPayload, ChangePasswordPayload } from '../types/user'

// Ambil semua user (biasanya cuma bisa diakses admin)
export async function getAllUsers() {
  const response = await http.get<User[]>('/users')
  return response.data
}

// Ambil satu user berdasarkan ID
export async function getUserById(id: string) {
  const response = await http.get<User>(`/users/${id}`)
  return response.data
}

// Mengubah data profil user
export async function updateUser(id: string, payload: UpdateUserPayload) {
  const response = await http.put<User>(`/users/${id}`, payload)
  return response.data
}

// Mengganti password user
export async function changePassword(id: string, payload: ChangePasswordPayload) {
  const response = await http.patch(`/users/${id}/password`, payload)
  return response.data
}

// Menghapus akun user
export async function deleteUser(id: string) {
  const response = await http.delete(`/users/${id}`)
  return response.data
}
