
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

export interface PortfolioPayload {
  title: string
  description: string
  thumbnail?: string
  projectUrl?: string
  techStack: string[]
  categoryId: string
}
