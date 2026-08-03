import { useEffect, useState } from "react";
import {
  Home,
  Folder,
  List,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  Download,
  Menu,
  ArrowUp,
  Minus,
  Star,
} from "lucide-react";




import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import { getDashboard } from "../../services/dashboard.service";

import type {
  DashboardResponse,
  DashboardStatistics,
  LatestContact,
} from "../../types/dashboard";
import useTheme from "../../hooks/useTheme";





const ACTIVITIES_KEY = "centa_activities";

interface Activity {
  user: string;
  action: string;
  time: string;
  date: string;
  status: string;
  timestamp: number;
}

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
 console.log(theme);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Beranda");
  const [searchQuery, setSearchQuery] = useState("");

  const [activities, setActivities] = useState<Activity[]>([]);

  const [statistics, setStatistics] =
    useState<DashboardStatistics | null>(null);

  const [latestContacts, setLatestContacts] =
    useState<LatestContact[]>([]);

  const [loading, setLoading] = useState(true);

  const loadActivities = () => {
    const data = localStorage.getItem(ACTIVITIES_KEY);

    if (data) {
      setActivities(JSON.parse(data));
    }
  };

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const response: DashboardResponse =
        await getDashboard();

      setStatistics(response.data.statistics);

      setLatestContacts(response.data.latestContacts);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Gagal memuat dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
    loadDashboard();
  }, []);

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

       <p className="mt-4 text-gray-500 dark:text-gray-400">
  Memuat dashboard...
</p>
      </div>
    </div>
  );
}

  const filteredActivities = activities.filter(
    (act) =>
      act.user
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      act.action
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      act.status
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const handleViewAll = () => {
    if (activities.length === 0) {
      toast("Belum ada aktivitas");
      return;
    }

    const msg = activities
      .map(
        (a, i) =>
          `${i + 1}. ${a.user} - ${a.action} (${a.time} ${a.date}) - ${a.status}`
      )
      .join("\n");

    alert(
      `SEMUA LOG AKTIVITAS (${activities.length} data)\n\n${msg}`
    );
  };
  
  return (
    <div className="
  flex
  min-h-screen
  bg-gray-100
  text-gray-900
  dark:bg-gray-950
  dark:text-gray-100
  font-sans
  w-full
">
    

      {/* Sidebar */}
     <aside
  className={`
    fixed
    lg:sticky
    top-0
    left-0
    h-screen
    w-[220px]
    bg-white
    dark:bg-gray-900
    border-r
    border-gray-100
    dark:border-gray-800
    p-6
    flex
    flex-col
    z-[100]
    transition-transform
    duration-300
    ${
      sidebarOpen
        ? "translate-x-0"
        : "-translate-x-full lg:translate-x-0"
    }
  `}
>
        <div className="text-2xl font-extrabold text-blue-600 pb-4 border-b border-gray-100 mb-5 tracking-tight">
          Centa<span className="text-blue-400">.</span>
        </div>

       <div className="
text-[10px]
uppercase
text-gray-400
dark:text-gray-500
">
        </div>

        <ul className="space-y-1">
          {[
            { label: 'Beranda', icon: <Home size={16} /> },
            { label: 'Proyek', icon: <Folder size={16} /> },
            { label: 'Layanan', icon: <List size={16} /> },
            { label: 'Tim', icon: <Users size={16} /> },
          ].map((item) => (
            <li
              key={item.label}
              onClick={() => {
                setActiveMenu(item.label);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                activeMenu === item.label
                  ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-slate-900 dark:text-white'
              }`}
            >
              <span className="w-4 text-center">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-100 pt-3 mt-4">
         <div className="
text-[10px]
uppercase
text-gray-400
dark:text-gray-500
">
          </div>
          <ul className="space-y-1">
            <li className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-slate-900
dark:text-white cursor-pointer">
              <Settings size={16} /> Pengaturan
            </li>
            <li className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-slate-900
dark:text-white cursor-pointer">
              <HelpCircle size={16} /> Bantuan
            </li>
          </ul>
        </div>

        {/* User Profile Component */}
        <div className="mt-auto border-t border-gray-100 pt-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
            {user?.name?.[0]?.toUpperCase() || 'A'}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-slate-900
dark:text-white truncate">
              {user?.name || 'Admin Centa'}
            </div>
            <div className="
text-[10px]
text-gray-400
dark:text-gray-500
">
  {user?.role === "SUPER_ADMIN"
    ? "Super Admin"
    : "Administrator"}
</div>
          </div>
          <button
  type="button"
  onClick={() => {
    logout();
    toast.success("Logout berhasil");
  }}
            className="
ml-auto
text-gray-400
dark:text-gray-500
hover:text-red-500
p-1
rounded-md
transition-colors
"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 min-h-screen overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 mb-8 flex-wrap lg:flex-nowrap">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-slate-900
dark:text-white p-1"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
           <h1 className="
text-lg
md:text-2xl
font-bold
tracking-tight
text-gray-900
dark:text-white
">
  Ringkasan Utama
</h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
           <div className="
flex
items-center
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-700
rounded-lg
px-3
py-1.5
gap-2
w-36
md:w-64
focus-within:border-blue-600
focus-within:ring-2
focus-within:ring-blue-600/10
">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Cari aktivitas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
border-none
outline-none
bg-transparent
text-xs
text-gray-900
dark:text-white
placeholder:text-gray-400
dark:placeholder:text-gray-500
w-full
"
              />
            </div>

            {/* Notification Bell */}
           <button
  onClick={() => alert('Notifikasi')}
 className="
relative
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-700
rounded-lg
w-9
h-9
flex
items-center
justify-center
hover:border-blue-600
hover:bg-blue-50
dark:hover:bg-gray-800
text-gray-500
dark:text-gray-300
transition-all
flex-shrink-0
"
>
              <Bell size={16} />
              <span
className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
>
{latestContacts.length}
</span>
            </button>

            {/* Export Report */}
            <button
              onClick={() => {
  toast("Fitur export akan segera tersedia.");
}}
              className="
bg-blue-600
hover:bg-blue-700
dark:bg-blue-500
dark:hover:bg-blue-600
text-white
font-semibold
text-xs
px-3
md:px-4
py-2
rounded-lg
flex
items-center
gap-2
transition-colors
flex-shrink-0
"
            >
              <Download size={14} /> <span className="hidden sm:inline">Unduh Laporan</span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
         <div
className="
bg-white
dark:bg-gray-900
rounded-xl
p-4
md:p-6
border
border-gray-100
dark:border-gray-800
shadow-sm
hover:shadow-md
transition-all
"
>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs md:text-sm">
                <Folder size={16} />
              </div>
              <span className="
text-[10px]
md:text-xs
font-semibold
uppercase
text-gray-400
dark:text-gray-500
tracking-wider
">
                Total Article
              </span>
            </div>
            <div className="text-xl md:text-3xl font-black text-slate-900
dark:text-white tracking-tight">
  {statistics?.totalArticles ?? 0}
</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-gray-500 text-[10px]">Unit</span>
             <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5">
                <ArrowUp size={10} /> +12%
              </span>
            </div>
          </div>

          <div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs md:text-sm">
                <List size={16} />
              </div>
              <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
                Total Layanan
              </span>
            </div>
            <div className="text-xl md:text-3xl font-black text-slate-900
dark:text-white tracking-tight">{statistics?.totalServices ?? 0}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-gray-500 text-[10px]">Katalog</span>
              <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5">
                <ArrowUp size={10} /> +4%
              </span>
            </div>
          </div>

          <div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xs md:text-sm">
                <Users size={16} />
              </div>
              <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
                Total User
              </span>
            </div>
            <div className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{statistics?.totalUsers ?? 0}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-gray-500 text-[10px]">Professional</span>
              <span className="text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5">
                <Minus size={10} /> Stabil
              </span>
            </div>
          </div>

          <div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-xs md:text-sm">
                <Star size={16} />
              </div>
              <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
                Total Portfolio
              </span>
            </div>
            <div className="text-xl md:text-3xl font-black text-slate-900
dark:text-white
tracking-tight">
  {statistics?.totalPortfolios ?? 0}
</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
             <span className="text-gray-500 text-[10px]">
  Project
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
  <div className="flex items-center gap-2 mb-2">
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center">
      <List size={16} />
    </div>

    <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
      Total Category
    </span>
  </div>

  <div className="text-xl md:text-3xl font-black text-slate-900 dark:text-white">
  {statistics?.totalCategories ?? 0}
</div>
</div>

<div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
  <div className="flex items-center gap-2 mb-2">
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
      <Users size={16} />
    </div>

    <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
      Total Contact
    </span>
  </div>

  <div className="text-xl md:text-3xl font-black text-slate-900 dark:text-white">
  {statistics?.totalContacts ?? 0}
</div>
</div>

<div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
  <div className="flex items-center gap-2 mb-2">
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
      <Folder size={16} />
    </div>

    <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
      Published
    </span>
  </div>

  <div className="text-xl md:text-3xl font-black text-slate-900 dark:text-white">
  {statistics?.publishedArticles ?? 0}
</div>
</div>

<div className="bg-white
dark:bg-gray-900
rounded-xl
p-4
border
border-gray-100
dark:border-gray-800 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
  <div className="flex items-center gap-2 mb-2">
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
      <Folder size={16} />
    </div>

    <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">
      Draft
    </span>
  </div>

  <div className="text-xl md:text-3xl font-black text-slate-900 dark:text-white">
  {statistics?.draftArticles ?? 0}
</div>
</div>

        {/* Recent Activity Table */}
       <section className="mt-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-sm md:text-base font-bold text-slate-900
dark:text-white">Log Aktivitas Terbaru</h2>
            <button
              onClick={handleViewAll}
              className="text-xs text-blue-600 font-semibold hover:text-indigo-600 hover:underline"
            >
              Lihat Semua →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
  <tr className="
    border-b
    border-gray-100
    dark:border-gray-800
    text-gray-400
    uppercase
    tracking-wider
    text-[10px]
">
                  <th className="pb-3 font-semibold">Pengguna</th>
                  <th className="pb-3 font-semibold">Tindakan</th>
                  <th className="pb-3 font-semibold">Waktu</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
             <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {filteredActivities.slice(0, 5).map((item, index) => {
                  let badgeStyle = 'bg-emerald-50 text-emerald-500';
                  if (item.status === 'Tertunda') badgeStyle = 'bg-amber-50 text-amber-500';
                  if (item.status === 'Gagal') badgeStyle = 'bg-red-50 text-red-500';

                  return (
                   <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-3 font-semibold text-slate-900
dark:text-white">{item.user}</td>
                      <td className="py-3 text-gray-500 dark:text-gray-300">{item.action}</td>
                     <td className="py-3 text-gray-400 dark:text-gray-500 text-[11px]">
                        {item.time} · {item.date}
                      </td>
                      <td className="py-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeStyle}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}

                {filteredActivities.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-400 dark:text-gray-500 py-8">
                      Tidak ada aktivitas ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};