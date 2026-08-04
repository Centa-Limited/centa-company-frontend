import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";


const ThemeToggle = () => {

  const {
    theme,
    toggleTheme,
  } = useTheme();


  return (

    <button
      type="button"

      onClick={toggleTheme}

      title={
        theme === "dark"
          ? "Light Mode"
          : "Dark Mode"
      }

      className="
        relative

        w-12
        h-12

        rounded-2xl

        flex
        items-center
        justify-center

        overflow-hidden

        border

        border-slate-200
        dark:border-slate-700

        bg-white/80
        dark:bg-slate-900/80

        backdrop-blur-xl

        shadow-sm
        hover:shadow-lg

        transition-all
        duration-300

        hover:scale-105

        group
      "
    >


      {/* Glow Effect */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br

          from-yellow-400/20
          via-transparent
          to-blue-500/20

          opacity-0
          group-hover:opacity-100

          transition
        "
      />



      {
        theme === "dark"

        ?

        (

          <Sun

            size={22}

            className="
              relative
              z-10

              text-yellow-400

              transition-all
              duration-500

              rotate-0

              group-hover:rotate-180

              drop-shadow-lg
            "

          />

        )

        :

        (

          <Moon

            size={22}

            className="
              relative
              z-10

              text-slate-700
              dark:text-slate-200

              transition-all
              duration-500

              group-hover:-rotate-12

              drop-shadow-lg
            "

          />

        )

      }


    </button>

  );

};


export default ThemeToggle;