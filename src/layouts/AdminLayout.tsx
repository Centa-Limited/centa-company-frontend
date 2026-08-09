import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import ThemeToggle from "../components/ThemeToggle";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />

      <div className="flex-1 flex flex-col">
      
        <header className="h-16 px-6 border-b bg-white dark:bg-gray-800 transition-colors duration-300 flex items-center justify-between">
          <h1 className="font-semibold text-gray-700 dark:text-gray-200">Admin Dashboard</h1>
          <ThemeToggle />
        </header>

        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}