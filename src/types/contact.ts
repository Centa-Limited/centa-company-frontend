// Bentuk data satu pesan dari form kontak
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  isRead: boolean
  createdAt: string
}

// Data yang dikirim pengunjung saat submit form kontak
export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}
