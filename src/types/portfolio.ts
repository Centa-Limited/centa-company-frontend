
// Bentuk data satu item portofolio (project yang pernah dikerjakan)
export interface Portfolio {
  id: string
  title: string
  slug: string
  description: string
  thumbnail?: string
  projectUrl?: string
  techStack: string[]
  categoryId: string
  createdAt: string
  updatedAt: string
}

// Data yang dikirim saat membuat/mengedit portofolio
export interface PortfolioPayload {
  title: string
  description: string
  thumbnail?: string
  projectUrl?: string
  techStack: string[]
  categoryId: string
}
