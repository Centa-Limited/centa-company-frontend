import http from './api'
import type { Article, ArticlePayload } from '../types/article'


export async function getAllArticles(params?: Record<string, string | number>) {
  const response = await http.get<Article[]>('/articles', { params })
  return response.data
}

// Ambil satu artikel berdasarkan ID
export async function getArticleById(id: string) {
  const response = await http.get<Article>(`/articles/${id}`)
  return response.data
}


export async function getArticleBySlug(slug: string) {
  const response = await http.get<Article>(`/articles/slug/${slug}`)
  return response.data
}


export async function createArticle(payload: ArticlePayload) {
  const response = await http.post<Article>('/articles', payload)
  return response.data
}


export async function updateArticle(id: string, payload: Partial<ArticlePayload>) {
  const response = await http.put<Article>(`/articles/${id}`, payload)
  return response.data
}


export async function deleteArticle(id: string) {
  const response = await http.delete(`/articles/${id}`)
  return response.data
}
