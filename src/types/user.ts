export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'editor' | 'viewer'
  createdAt: string
}

export interface UpdateUserPayload {
  name?: string
  email?: string
  avatar?: string
  role?: User['role']
}


export interface ChangePasswordPayload {
  oldPassword: string
  newPassword: string
}

