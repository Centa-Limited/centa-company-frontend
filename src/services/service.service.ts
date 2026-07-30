import http from './api'
import type { Service, ServicePayload } from '../types/service'

// Ambil semua layanan
export async function getAllServices() {
  const response = await http.get<Service[]>('/services')
  return response.data
}

// Ambil satu layanan berdasarkan ID
export async function getServiceById(id: string) {
  const response = await http.get<Service>(`/services/${id}`)
  return response.data
}

// Menambah layanan baru
export async function createService(payload: ServicePayload) {
  const response = await http.post<Service>('/services', payload)
  return response.data
}

// Mengubah layanan yang sudah ada
export async function updateService(id: string, payload: Partial<ServicePayload>) {
  const response = await http.put<Service>(`/services/${id}`, payload)
  return response.data
}

// Menghapus layanan
export async function deleteService(id: string) {
  const response = await http.delete(`/services/${id}`)
  return response.data
}
