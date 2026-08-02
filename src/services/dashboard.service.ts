import http from './api'
import type { DashboardSummary, DashboardChartPoint } from '../types/dashboard'


export async function getDashboardSummary() {
  const response = await http.get<DashboardSummary>('/dashboard/summary')
  return response.data
}

export async function getDashboardChart(type: 'articles' | 'visitors') {
  const response = await http.get<DashboardChartPoint[]>('/dashboard/chart', {
    params: { type },
  })
  return response.data
}
