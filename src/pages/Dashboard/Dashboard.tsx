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
 ArrowUp,
 Minus,
 Star,
 ShieldCheck,
 Mail,
 Plus,
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

type MenuItem =
  | "Beranda"
  | "Proyek"
  | "Tim"
  | "Pengaturan"
  | "Bantuan";

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
 console.log(theme);
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const [activeMenu, setActiveMenu] =
  useState<MenuItem>("Beranda");
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

  const projects = [
  {
    name: "Website Company Profile",
    status: "Production",
    progress: "100%",
  },
  {
    name: "Centa CMS",
    status: "Development",
    progress: "80%",
  },
  {
    name: "Security Assessment",
    status: "Testing",
    progress: "60%",
  },
];


const teamMembers = [
  {
    department: "Founder",
    members: [
      {
        name: "Yudi Ardata",
        role: "Founder ",
      },
    ],
  },

  {
    department: "App Development",
    members: [
      {
        name: "Yudi Ardata",
        role: "App Development",
      },
    ],
  },

  {
    department: "Web Development X Cyber Security",
    members: [
      {
        name: "Goestaf Nurhidayat",
        role: "Leader WebDev",
      },
      {
        name: "Desvita Putri Varizka",
        role: "Team Member",
      },
    ],
  },

  {
    department: "Marketing",
    members: [
      {
        name: "Fakhrian Zain",
        role: "Lead Marketing",
      },
      {
        name: "Moh. Rifqi",
        role: "Team Member",
      },
      {
        name: "Ach. Nur Wahyudi",
        role: "Team Member",
      },
    ],
  },

  {
    department: "Finance",
    members: [
      {
        name: "Desvita Putri Varizka",
        role: "Finance",
      },
    ],
  },
];

const menus: {
  label: MenuItem;
  icon: React.ReactNode;
}[] = [
  {
    label: "Beranda",
    icon: <Home size={16} />,
  },
  {
    label: "Proyek",
    icon: <Folder size={16} />,
  },
  {
    label: "Tim",
    icon: <Users size={16} />,
  },
  {
    label: "Pengaturan",
    icon: <Settings size={16} />,
  },
  {
    label: "Bantuan",
    icon: <HelpCircle size={16} />,
  },
];

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
  <div
  className="
    flex
    min-h-screen
    bg-gradient-to-br
    from-slate-50
    via-white
    to-slate-100
    dark:from-slate-950
    dark:via-slate-950
    dark:to-slate-900
    text-slate-900
    dark:text-white
    font-sans
  "

    >
    

      {/* Sidebar */}
     <aside
  className={`
    fixed
    lg:sticky
    top-0
    left-0
    h-screen
    w-[260px]
    bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
    border-r
    border-slate-200/60
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
        <div
  className="
    flex
    items-center
    gap-3
    pb-6
    mb-8
    border-b
    border-slate-200
    dark:border-slate-800
  "
>
  <div
    className="
      w-11
      h-11
      rounded-2xl
      bg-gradient-to-br
      from-blue-600
      via-indigo-600
      to-violet-600
      flex
      items-center
      justify-center
      shadow-lg
      shadow-blue-500/20
    "
  >
    <span
      className="
        text-white
        text-lg
        font-black
      "
    >
      C
    </span>
  </div>

  <div>
    <h1
      className="
        text-xl
        font-extrabold
        tracking-tight
        text-slate-900
        dark:text-white
      "
    >
      Centa CMS
    </h1>

    <p
      className="
        text-xs
        text-slate-500
        dark:text-slate-400
      "
    >
      Content Management System
    </p>
  </div>
</div>

        <ul className="space-y-1">
   
        {menus.map((item) => (
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

       

        {/* User Profile Component */}
        <div className="mt-auto border-t border-gray-100 pt-3 flex items-center gap-2.5">
          <div
className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-indigo-500
to-blue-600
text-white
flex
items-center
justify-center
shadow-lg
"
>
            {user?.name?.[0]?.toUpperCase() || 'A'}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-slate-900
dark:text-white truncate">
              {user?.name || 'Admin Centa'}
            </div>
            <div className="
text-[10px]
text-slate-500
dark:text-slate-400
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
text-slate-500
dark:text-slate-400
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
         <div>

<h1
className="
text-3xl
font-bold
tracking-tight
"
>
Beranda
</h1>


<p
className="
text-sm
text-slate-500
dark:text-slate-400
mt-2
"
>
Summary Activity Centa Limited
</p>

</div>
        

          <div className="flex items-center gap-3">
            {/* Search Input */}
          <div
className="
flex
items-center
bg-white/70
dark:bg-slate-900/70
backdrop-blur-md
shadow-sm
border
border-slate-200/70
dark:border-slate-700
rounded-xl
px-3
py-2
gap-2
w-36
md:w-64
transition-all
duration-300
focus-within:border-blue-500
focus-within:ring-4
focus-within:ring-blue-500/10
"
>
              <Search size={14} className="text-slate-500
dark:text-slate-400" />
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

      
      
      {
activeMenu === "Proyek" && (

<section
className="
mb-8
rounded-2xl
bg-white/80
dark:bg-slate-900/80
border
border-slate-200/70
dark:border-slate-800
p-6
"
>

<div className="flex justify-between items-center mb-5">

<h2 className="font-bold text-lg">
Daftar Proyek
</h2>

<button
className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
text-xs
flex
items-center
gap-2
"
>
<Plus size={14}/>
Tambah Proyek
</button>


</div>


<div className="grid md:grid-cols-3 gap-4">

{
projects.map((project)=>(
<div
key={project.name}
className="
rounded-xl
border
dark:border-slate-700
p-5
"
>

<h3 className="font-bold">
{project.name}
</h3>


<p className="
text-xs
text-slate-500
mt-2
">
Status : {project.status}
</p>


<div className="mt-4">

<div className="flex justify-between text-xs">
<span>
Progress
</span>

<span>
{project.progress}
</span>

</div>


<div className="
h-2
bg-slate-200
dark:bg-slate-700
rounded-full
mt-2
">

<div
className="
h-full
bg-blue-600
rounded-full
w-[80%]
"
/>


</div>

</div>


</div>
))
}


</div>


</section>

)
}



{
activeMenu === "Tim" && (

<section
className="
mb-8
rounded-2xl
bg-white/80
dark:bg-slate-900/80
border
dark:border-slate-800
p-6
"
>

<h2 className="font-bold text-lg mb-5">
Centa Limited | Internal
</h2>


<div className="grid md:grid-cols-3 gap-4">

{
teamMembers.map((department)=>(
<div
key={department.department}
className="
border
dark:border-slate-700
rounded-xl
p-5
"
>

<h3 className="
font-bold
text-lg
mb-4
text-indigo-600
dark:text-indigo-400
">
{department.department}
</h3>


<div className="space-y-3">

{
department.members.map((member)=>(
<div
key={member.name}
className="
flex
items-center
gap-4
"
>

<div
className="
w-12
h-12
rounded-full
bg-indigo-600
text-white
flex
items-center
justify-center
font-bold
"
>
{member.name[0]}
</div>


<div>

<h4 className="font-semibold">
{member.name}
</h4>


<p className="
text-xs
text-slate-500
dark:text-slate-400
">
{member.role}
</p>


</div>

</div>
))
}

</div>

</div>
))
}


</div>

</section>

)
}



{
activeMenu === "Pengaturan" && (

<section
className="
mb-8
rounded-2xl
bg-white/80
dark:bg-slate-900/80
border
dark:border-slate-800
p-6
"
>

<h2 className="font-bold text-lg mb-5">
Pengaturan Sistem
</h2>


<div className="space-y-4">


<div
className="
flex
justify-between
items-center
border-b
dark:border-slate-700
pb-4
"
>

<div>

<p className="font-semibold">
Mode Website
</p>

<p className="text-xs text-slate-500">
Aktifkan website publik Centa
</p>

</div>


<input
type="checkbox"
defaultChecked
/>

</div>




<div
className="
flex
justify-between
items-center
"
>

<div>

<p className="font-semibold">
Security Mode
</p>

<p className="text-xs text-slate-500">
Enable audit keamanan
</p>

</div>


<ShieldCheck
className="text-green-500"
/>


</div>



</div>


</section>

)
}
      
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
         <div
className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
"
>
           <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-indigo-500/15
      to-blue-500/20
      text-indigo-600
      flex
      items-center
      justify-center
    "
  >
    <Folder size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Total Article
  </span>
</div>
            <div className="text-4xl
font-black
tracking-tight font-black text-slate-900
dark:text-white tracking-tight">
  {statistics?.totalArticles ?? 0}
</div>
           <div className="mt-4 flex items-center justify-between">

  <span className="text-xs text-slate-500">
    Unit
  </span>

  <span
    className="
      inline-flex
      items-center
      gap-1
      rounded-full
      bg-emerald-100
      dark:bg-emerald-900/40
      px-3
      py-1
      text-xs
      font-bold
      text-emerald-600
    "
  >
    <ArrowUp size={12} />
    12.4%
  </span>

</div>

<div className="mt-5">

  <div className="flex justify-between text-xs mb-2">

    <span className="text-slate-500">
      Progress
    </span>

    <span className="font-semibold">
      72%
    </span>

  </div>

  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">

    <div
      className="
        h-full
        w-[72%]
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-indigo-600
      "
    />

  </div>

</div>
          </div>

          <div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
            <div className="flex items-center gap-2 mb-2">
              <div
  className="
    w-10
    h-10
    rounded-xl
    bg-gradient-to-br
    from-emerald-500/15
    to-green-500/20
    text-emerald-600
    flex
    items-center
    justify-center
  "
>
  <List size={20} />
</div>
              <span className="text-[10px] md:text-xs font-semibold uppercase  text-slate-500
    dark:text-slate-400 tracking-wider">
                Total Layanan
              </span>
            </div>
            <div className="text-4xl
font-black
tracking-tight font-black text-slate-900
dark:text-white tracking-tight">{statistics?.totalServices ?? 0}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-gray-500 text-[10px]">Katalog</span>
              <span className="text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5">
                <ArrowUp size={10} /> +4%
              </span>
            </div>
          </div>

          <div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
           <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-purple-500/15
      to-indigo-500/20
      text-purple-600
      flex
      items-center
      justify-center
    "
  >
    <Users size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Total Admin
  </span>
</div>

<div
  className="
    text-4xl
    font-black
    tracking-tight
    tabular-nums
    text-slate-900
    dark:text-white
  "
>
  {statistics?.totalUsers ?? 0}
</div>

<div className="flex items-center gap-2 mt-2 text-xs">
  <span className="text-gray-500 text-[10px]">
    Professional
  </span>

  <span
    className="
      text-amber-500
      bg-amber-50
      dark:bg-amber-900/30
      px-2
      py-0.5
      rounded-full
      text-[10px]
      font-bold
      flex
      items-center
      gap-0.5
    "
  >
    <Minus size={10} />
    Stabil
  </span>
</div>
            <div className="text-4xl
font-black
tracking-tight font-black text-slate-900 dark:text-white tracking-tight">{statistics?.totalUsers ?? 0}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-gray-500 text-[10px]">Professional</span>
              <span className="text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5">
                <Minus size={10} /> Stabil
              </span>
            </div>
          </div>

          <div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
          <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-amber-500/15
      to-orange-500/20
      text-amber-600
      flex
      items-center
      justify-center
    "
  >
    <Star size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Total Portfolio
  </span>
</div>
            <div className="text-4xl
font-black
tracking-tight font-black text-slate-900
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

        <div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
  <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-cyan-500/15
      to-sky-500/20
      text-cyan-600
      flex
      items-center
      justify-center
    "
  >
    <List size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Total Category
  </span>
</div>

  <div className="text-4xl
font-black
tracking-tight font-black text-slate-900 dark:text-white">
  {statistics?.totalCategories ?? 0}
</div>
</div>

<div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
  <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-pink-500/15
      to-rose-500/20
      text-pink-600
      flex
      items-center
      justify-center
    "
  >
    <Users size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Total Contact
  </span>
</div>

  <div className="text-4xl
font-black
tracking-tight font-black text-slate-900 dark:text-white">
  {statistics?.totalContacts ?? 0}
</div>
</div>

<div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
  <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-green-500/15
      to-emerald-500/20
      text-green-600
      flex
      items-center
      justify-center
    "
  >
    <Folder size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Published
  </span>
</div>

 <div
  className="
    text-4xl
    font-black
    tracking-tight
    tabular-nums
    text-slate-900
    dark:text-white
  "
>
  {statistics?.publishedArticles ?? 0}
</div>
</div>

<div className="
group
relative
overflow-hidden
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-400/40
">
  <div className="flex items-center gap-2 mb-2">
  <div
    className="
      w-10
      h-10
      rounded-xl
      bg-gradient-to-br
      from-yellow-500/15
      to-amber-500/20
      text-yellow-600
      flex
      items-center
      justify-center
    "
  >
    <Folder size={18} />
  </div>

  <span
    className="
      text-[10px]
      md:text-xs
      font-semibold
      uppercase
      text-slate-500
      dark:text-slate-400
      tracking-wider
    "
  >
    Draft
  </span>
</div>

 <div
  className="
    text-4xl
    font-black
    tracking-tight
    tabular-nums
    text-slate-900
    dark:text-white
  "
>
  {statistics?.draftArticles ?? 0}
</div>
</div>

        {/* Recent Activity Table */}
      <section
className="
mt-8
rounded-2xl
bg-white/80
dark:bg-slate-900/80
backdrop-blur-xl
border
border-slate-200/70
dark:border-slate-800
shadow-sm
overflow-hidden
"
>
         <div
className="
flex
items-center
justify-between
px-6
py-5
border-b
border-slate-200
dark:border-slate-800
"
>
            <h2 className="text-sm md:text-base font-bold text-slate-900
dark:text-white">Log Aktivitas Terbaru</h2>
            <button
              onClick={handleViewAll}
              className="text-xs text-blue-600 font-semibold hover:text-indigo-600 hover:underline"
            >
              Lihat Semua →
            </button>
          </div>

          <div className="overflow-x-auto px-6">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
  <tr className="
    border-b
    border-gray-100
    dark:border-gray-800
    text-slate-500
dark:text-slate-400
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
                     <td className="py-3 text-slate-500
dark:text-slate-400 text-[11px]">
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
                    <td colSpan={4} className="text-center text-slate-500
dark:text-slate-400 py-8">
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