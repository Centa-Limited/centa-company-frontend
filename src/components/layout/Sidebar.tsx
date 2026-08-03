import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
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
      name: "Users",
      path: "/dashboard/users",
      icon: Users,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];


  return (

    <aside
      className="
        w-64
        min-h-screen
        bg-white
        dark:bg-gray-800
        border-r
        border-gray-200
        dark:border-gray-700
        transition-colors
        duration-300
      "
    >

      {/* Logo */}

      <div
        className="
          h-16
          flex
          items-center
          px-6
          font-bold
          text-xl
          text-gray-800
          dark:text-white
        "
      >
        Centa Admin
      </div>



      {/* Menu */}

      <nav
        className="
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
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  transition

                  ${
                    isActive
                    ?
                    `
                    bg-blue-100
                    text-blue-700
                    dark:bg-blue-900
                    dark:text-blue-300
                    `
                    :
                    `
                    text-gray-700
                    dark:text-gray-300
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    `
                  }
                  `
                }
              >

                <Icon size={20}/>

                <span>
                  {menu.name}
                </span>

              </NavLink>

            );

          })
        }

      </nav>


    </aside>

  );

};


export default Sidebar;