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
        w-11
        h-11
        rounded-lg
        border
        border-gray-300
        bg-white
        hover:bg-gray-100
        dark:bg-gray-800
        dark:border-gray-700
        dark:hover:bg-gray-700
        flex
        items-center
        justify-center
        transition-all
        duration-300
      "
    >
      {
        theme === "dark"
          ? (
            <Sun
              size={20}
              className="
                text-yellow-400
              "
            />
          )
          : (
            <Moon
              size={20}
              className="
                text-slate-700
              "
            />
          )
      }
    </button>
  );
};

export default ThemeToggle;