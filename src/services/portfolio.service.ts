
import http from './api'
import type { Portfolio, PortfolioPayload } from '../types/portfolio'

// Ambil semua portofolio
export async function getAllPortfolios(params?: Record<string, string | number>) {
  const response = await http.get<Portfolio[]>('/portfolios', { params })
  return response.data
}

// Ambil satu portofolio berdasarkan ID
export async function getPortfolioById(id: string) {
  const response = await http.get<Portfolio>(`/portfolios/${id}`)
  return response.data
}

// Ambil satu portofolio berdasarkan slug (untuk halaman detail publik)
export async function getPortfolioBySlug(slug: string) {
  const response = await http.get<Portfolio>(`/portfolios/slug/${slug}`)
  return response.data
}

// Menambah portofolio baru
export async function createPortfolio(payload: PortfolioPayload) {
  const response = await http.post<Portfolio>('/portfolios', payload)
  return response.data
}

// Mengubah portofolio yang sudah ada
export async function updatePortfolio(id: string, payload: Partial<PortfolioPayload>) {
  const response = await http.put<Portfolio>(`/portfolios/${id}`, payload)
  return response.data
}

// Menghapus portofolio
export async function deletePortfolio(id: string) {
  const response = await http.delete(`/portfolios/${id}`)
  return response.data
}
