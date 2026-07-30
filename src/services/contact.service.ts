
import http from './api'
import type { ContactMessage, ContactPayload } from '../types/contact'

// Dipanggil dari halaman publik saat pengunjung submit form kontak
export async function sendContactMessage(payload: ContactPayload) {
  const response = await http.post<ContactMessage>('/contacts', payload)
  return response.data
}

// Dipanggil dari halaman admin/dashboard untuk melihat semua pesan masuk
export async function getAllContactMessages() {
  const response = await http.get<ContactMessage[]>('/contacts')
  return response.data
}

// Menandai satu pesan sebagai sudah dibaca
export async function markContactAsRead(id: string) {
  const response = await http.patch<ContactMessage>(`/contacts/${id}/read`)
  return response.data
}

// Menghapus pesan
export async function deleteContactMessage(id: string) {
  const response = await http.delete(`/contacts/${id}`)
  return response.data
}
