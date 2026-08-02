export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  price?: number
  createdAt: string
  updatedAt: string
}

export interface ServicePayload {
  title: string
  description: string
  icon?: string
  price?: number
}

