import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import ThemeToggle from "../components/ThemeToggle";

export default function AdminLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;

    if (path === "/dashboard") {
      return "Dashboard";
    }

    if (path.startsWith("/dashboard/contacts")) {
      return "Contacts";
    }

    if (path.startsWith("/dashboard/articles")) {
      return "Articles";
    }

    if (path.startsWith("/dashboard/categories")) {
      return "Categories";
    }

    if (path.startsWith("/dashboard/services")) {
      return "Services";
    }

    if (path.startsWith("/dashboard/users")) {
  return "User Management";
}

if (path.startsWith("/dashboard/team")) {
  return "Team";
}

if (path.startsWith("/dashboard/about")) {
  return "About";
}

if (path.startsWith("/dashboard/settings")) {
  return "Settings";
}

return "Management";
  };

  const pageTitle = getPageTitle();

  return (
    <div
      className="
  relative
  flex
  min-h-screen
  w-full
  overflow-hidden

  bg-slate-50
  text-slate-900

  dark:bg-[#070b14]
  dark:text-white
"
    >

<div
  className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
  "
>
  <div
    className="
      absolute
      -left-32
      -top-32
      h-96
      w-96
      rounded-full
      bg-blue-500/10
      blur-3xl
      dark:bg-blue-500/10
    "
  />

  <div
    className="
      absolute
      right-[-10rem]
      top-1/3
      h-[30rem]
      w-[30rem]
      rounded-full
      bg-indigo-500/10
      blur-3xl
      dark:bg-indigo-500/10
    "
  />

  <div
    className="
      absolute
      bottom-[-12rem]
      left-1/3
      h-[28rem]
      w-[28rem]
      rounded-full
      bg-purple-500/5
      blur-3xl
      dark:bg-purple-500/10
    "
  />
</div>

      {/* Sidebar */}
      <div
        className="
          relative
          z-30
          hidden
          shrink-0

          lg:block
        "
      >
        <Sidebar />
      </div>

      {/* Main Application */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          min-w-0
          flex-1
          flex-col
        "
      >
        {/* Header */}
        <header
         className="
  sticky
  top-0
  z-20
  flex
  h-[68px]
  shrink-0
  items-center
  justify-between
  gap-4

  border-b
  border-slate-200/60
  bg-white/75
  px-4
  backdrop-blur-2xl

  shadow-[0_1px_0_rgba(15,23,42,0.02)]

  dark:border-white/[0.06]
  dark:bg-[#070b14]/85
  dark:shadow-[0_1px_0_rgba(255,255,255,0.02)]

  sm:px-6
  lg:px-8
"
>
          {/* Page Information */}
          <div
            className="
              flex
              min-w-0
              items-center
              gap-3
              sm:gap-4
            "
          >
            <div
              className="
  hidden
  h-10
  w-10
  shrink-0
  items-center
  justify-center
  rounded-xl

  border
  border-blue-500/20

  bg-gradient-to-br
  from-blue-500/15
  via-indigo-500/10
  to-purple-500/10

  shadow-[0_4px_18px_rgba(59,130,246,0.08)]

  sm:flex
"
>
              <div
                className="
  h-2
  w-2
  rounded-full
  bg-blue-400
  shadow-[0_0_14px_rgba(96,165,250,0.9)]
  animate-pulse
"
              />
            </div>

            <div className="min-w-0">
              <p
               className="
  text-[9px]
  font-semibold
  uppercase
  tracking-[0.22em]
  text-slate-400
  dark:text-slate-500
  sm:text-[10px]
"
              >
                Centa Control Panel
              </p>

              <h1
                className="
                  truncate
                  text-sm
                  font-semibold
                  text-slate-900
                  sm:text-base
                  dark:text-white
                "
              >
                {pageTitle}
              </h1>
            </div>
          </div>

          {/* Header Actions */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
          >
            {/* System Status */}
            <div
             className="
  hidden
  items-center
  gap-2.5
  rounded-xl
  border
  border-emerald-500/15
  bg-emerald-500/[0.06]
  px-3.5
  py-2

  shadow-[0_4px_16px_rgba(16,185,129,0.05)]

  transition-all
  duration-200

  hover:border-emerald-500/25
  hover:bg-emerald-500/[0.09]

  dark:border-emerald-400/10
  dark:bg-emerald-400/[0.05]
  dark:hover:border-emerald-400/20
  dark:hover:bg-emerald-400/[0.08]

  md:flex
"
            >
              <span
  className="
    h-2
    w-2
    rounded-full
    bg-emerald-400
    shadow-[0_0_10px_rgba(52,211,153,0.8)]
    animate-pulse
  "
/>

              <span
                className="
  text-[11px]
  font-semibold
  tracking-wide
  text-emerald-600

  dark:text-emerald-400
"
              >
                System Online
              </span>
            </div>

            {/* Theme Toggle */}
            <div
              className="
  flex
  h-10
  w-10
  items-center
  justify-center
  rounded-xl

  border
  border-slate-200/80
  bg-white

  shadow-sm

  transition-all
  duration-200

  hover:-translate-y-0.5
  hover:border-slate-300
  hover:bg-slate-50
  hover:shadow-md

  dark:border-white/[0.07]
  dark:bg-white/[0.04]
  dark:hover:border-white/[0.12]
  dark:hover:bg-white/[0.07]
"
            >
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
       <main
  className="
  relative
  min-w-0
  flex-1
  overflow-x-hidden

  px-4
  py-6

  sm:px-6
  sm:py-7

  lg:px-8
  lg:py-8

  before:pointer-events-none
  before:absolute
  before:inset-x-0
  before:top-0
  before:h-40
  before:bg-gradient-to-b
  before:from-blue-500/[0.025]
  before:to-transparent

  dark:before:from-blue-400/[0.025]
"
>
         <div
  className="
    relative
    mx-auto
    w-full
    max-w-[1680px]
  "
>
  <Outlet />
</div>
        </main>

        {/* Footer */}
        <footer
          className="
            shrink-0
            border-t
          border-slate-200/60
           bg-white/30
            px-4
            py-4

           dark:border-white/[0.06]
            dark:bg-[#070b14]/40

            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-2

              sm:flex-row
            "
          >
            <p
              className="
                text-center
                text-xs
                text-slate-500
                dark:text-slate-600
                sm:text-left
              "
            >
              Centa Limited • Management System
            </p>

            <p
              className="
                text-center
                text-xs
                text-slate-500
                dark:text-slate-600
                sm:text-right
              "
            >
              Secure Administration Panel
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
