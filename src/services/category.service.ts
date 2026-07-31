
import http from './api'
import type { Category, CategoryPayload } from '../types/category'

// Ambil semua kategori
export async function getAllCategories() {
  const response = await http.get<Category[]>('/categories')
  return response.data
}

// Ambil satu kategori berdasarkan ID
export async function getCategoryById(id: string) {
  const response = await http.get<Category>(`/categories/${id}`)
  return response.data
}

// Membuat kategori baru
export async function createCategory(payload: CategoryPayload) {
  const response = await http.post<Category>('/categories', payload)
  return response.data
}

// Mengubah nama kategori
export async function updateCategory(id: string, payload: CategoryPayload) {
  const response = await http.put<Category>(`/categories/${id}`, payload)
  return response.data
}

// Menghapus kategori
export async function deleteCategory(id: string) {
  const response = await http.delete(`/categories/${id}`)
  return response.data
}
