// Bentuk data satu kategori
export interface Category {
  id: string
  name: string
  slug: string
  createdAt: string
}

// Data yang dikirim saat membuat/mengedit kategori
export interface CategoryPayload {
  name: string
}
