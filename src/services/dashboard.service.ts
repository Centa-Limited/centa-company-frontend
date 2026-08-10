import http from "./api";
import type { DashboardResponse } from "../types/dashboard";

export const getDashboard =
  async (): Promise<DashboardResponse> => {
    const { data } =
      await http.get<DashboardResponse>(
        "/dashboard"
      );

    return data;
  };