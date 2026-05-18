import {
  Bell,
  Moon,
  Search,
  Sun,
} from "lucide-react";

import {
  useContext,
} from "react";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Navbar() {

  const {
    darkMode,
    setDarkMode,
  } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-slate-800 h-20 rounded-3xl px-6 flex items-center justify-between shadow-sm border border-gray-100 dark:border-slate-700 transition-all duration-300">

      {/* Search */}
      <div className="flex items-center gap-3 bg-[#f5f7fb] dark:bg-slate-700 px-4 py-3 rounded-2xl w-[350px]">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent outline-none w-full dark:text-white"
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-[#f5f7fb] dark:bg-slate-700 p-3 rounded-2xl transition hover:scale-105"
        >

          {darkMode
            ? <Sun size={20} />
            : <Moon size={20} />
          }

        </button>

        {/* Notifications */}
        <button className="relative bg-[#f5f7fb] dark:bg-slate-700 p-3 rounded-2xl">

          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />

        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-[#6C63FF]" />

          <div>

            <p className="font-semibold dark:text-white">
              Profesora
            </p>

            <p className="text-sm text-gray-400">
              Premium
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;