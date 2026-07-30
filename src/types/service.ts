// Bentuk data satu layanan yang ditawarkan (misal: "Web Development", "UI/UX Design")
export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  price?: number
  createdAt: string
  updatedAt: string
}

// Data yang dikirim saat membuat/mengedit layanan
export interface ServicePayload {
  title: string
  description: string
  icon?: string
  price?: number
}

