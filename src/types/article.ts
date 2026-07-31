// Bentuk data satu artikel (sesuai yang dikirim balik oleh backend)
export interface Article {
  id: string
  title: string
  slug: string
  content: string
  thumbnail?: string
  categoryId: string
  authorId: string
  isPublished: boolean
  createdAt: string
  updatedAt: string
}

// Data yang dikirim saat membuat/mengedit artikel (tanpa field yang otomatis dibuat server, misal id & createdAt)
export interface ArticlePayload {
  title: string
  content: string
  thumbnail?: string
  categoryId: string
  isPublished?: boolean
}
