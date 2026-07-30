// Ringkasan angka-angka yang ditampilkan sebagai kartu statistik di dashboard
export interface DashboardSummary {
  totalArticles: number
  totalPortfolios: number
  totalServices: number
  totalUnreadMessages: number
  totalUsers: number
}

// Satu titik data untuk grafik/chart, misal jumlah artikel per bulan
export interface DashboardChartPoint {
  label: string // contoh: "Jan", "Feb", dst
  value: number
}
