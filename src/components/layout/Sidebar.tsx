import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Users,
  Briefcase,
ShieldCheck,
} from "lucide-react";

import { NavLink } from "react-router-dom";


const Sidebar = () => {

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Articles",
      path: "/dashboard/articles",
      icon: FileText,
    },
    {
      name: "Categories",
      path: "/dashboard/categories",
      icon: FolderOpen,
    },
    {
      name: "Services",
      path: "/dashboard/services",
      icon: Briefcase,
    },
    {
      name: "Admin",
      path: "/dashboard/users",
      icon: Users,
    },
    
  ];




  return (

    <aside
      className="
        relative
        w-64
        min-h-screen

        overflow-hidden

        bg-white/80
        dark:bg-slate-950/90

        backdrop-blur-xl

        border-r
        border-slate-200/70
        dark:border-slate-800

        transition-all
        duration-300
      "
    >


      {/* Background Decoration */}

      <div
        className="
          absolute
          top-0
          right-0

          w-40
          h-40

          bg-blue-500/20
          blur-3xl
          rounded-full
        "
      />


      <div
        className="
          absolute
          bottom-20
          left-0

          w-32
          h-32

          bg-indigo-500/20
          blur-3xl
          rounded-full
        "
      />



      <div
        className="
          relative
          z-10
        "
      >


      {/* Logo */}

      <div
        className="
          h-20

          flex
          items-center

          px-6

          border-b
          border-slate-200/70
          dark:border-slate-800
        "
      >

        <div>

          <div
            className="
              text-2xl
              font-extrabold
              tracking-tight

              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600

              bg-clip-text
              text-transparent
            "
          >
            Centa Admin
          </div>


          <p
            className="
              text-xs
              mt-1

              text-slate-500
              dark:text-slate-400
            "
          >
            Management System
          </p>


        </div>


      </div>





      {/* Admin Card */}

      <div
        className="
          mx-4
          mt-5

          p-4

          rounded-2xl

          bg-gradient-to-br
          from-blue-500/10
          to-indigo-500/10

          border
          border-blue-500/20

          backdrop-blur-md
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-10
              h-10

              flex
              items-center
              justify-center

              rounded-xl

              bg-gradient-to-br
              from-blue-600
              to-indigo-600

              text-white
            "
          >

            <ShieldCheck size={22}/>

          </div>


          <div>

            <p
              className="
                text-sm
                font-semibold

                text-slate-800
                dark:text-white
              "
            >
              Administrator
            </p>


            <p
              className="
                text-xs

                text-slate-500
                dark:text-slate-400
              "
            >
              Online
            </p>


          </div>


        </div>


      </div>





      {/* Menu */}

      <nav
        className="
          mt-6

          px-4

          space-y-2
        "
      >

        {
          menus.map((menu) => {

            const Icon = menu.icon;


            return (

              <NavLink

                key={menu.path}

                to={menu.path}


                className={({isActive}) =>
                  `
                  group

                  relative

                  flex
                  items-center

                  gap-3

                  px-4
                  py-3

                  rounded-xl

                  transition-all
                  duration-300


                  ${
                    isActive

                    ?

                    `
                    bg-gradient-to-r

                    from-blue-600
                    to-indigo-600

                    text-white

                    shadow-lg
                    shadow-blue-500/30

                    scale-[1.02]
                    `

                    :

                    `
                    text-slate-600

                    dark:text-slate-300

                    hover:bg-slate-100

                    dark:hover:bg-slate-800

                    hover:translate-x-1
                    `
                  }

                  `
                }

              >


                <Icon

                  size={20}

                  className="
                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "

                />



                <span
                  className="
                    font-medium
                  "
                >

                  {menu.name}

                </span>


              </NavLink>


            );


          })
        }


      </nav>


      </div>


    </aside>


  );

};


export default Sidebar;