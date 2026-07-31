// Bentuk data satu user
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'editor' | 'viewer'
  createdAt: string
}

// Data yang dikirim saat mengubah profil user
export interface UpdateUserPayload {
  name?: string
  email?: string
  avatar?: string
  role?: User['role']
}

// Data yang dikirim saat mengganti password
export interface ChangePasswordPayload {
  oldPassword: string
  newPassword: string
}

