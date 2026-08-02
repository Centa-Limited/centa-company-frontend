
import http from './api'
import type { ContactMessage, ContactPayload } from '../types/contact'


export async function sendContactMessage(payload: ContactPayload) {
  const response = await http.post<ContactMessage>('/contacts', payload)
  return response.data
}


export async function getAllContactMessages() {
  const response = await http.get<ContactMessage[]>('/contacts')
  return response.data
}


export async function markContactAsRead(id: string) {
  const response = await http.patch<ContactMessage>(`/contacts/${id}/read`)
  return response.data
}


export async function deleteContactMessage(id: string) {
  const response = await http.delete(`/contacts/${id}`)
  return response.data
}
