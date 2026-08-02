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

export interface ArticlePayload {
  title: string
  content: string
  thumbnail?: string
  categoryId: string
  isPublished?: boolean
}
