import http from './api'
import type { Service, ServicePayload } from '../types/service'


export async function getAllServices() {
  const response = await http.get<Service[]>('/services')
  return response.data
}


export async function getServiceById(id: string) {
  const response = await http.get<Service>(`/services/${id}`)
  return response.data
}


export async function createService(payload: ServicePayload) {
  const response = await http.post<Service>('/services', payload)
  return response.data
}


export async function updateService(id: string, payload: Partial<ServicePayload>) {
  const response = await http.put<Service>(`/services/${id}`, payload)
  return response.data
}


export async function deleteService(id: string) {
  const response = await http.delete(`/services/${id}`)
  return response.data
}
