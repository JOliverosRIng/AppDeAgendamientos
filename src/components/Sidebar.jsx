import {
  Home,
  Calendar,
  Users,
  Wallet,
  BarChart3,
  GraduationCap,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const links = [
    {
      name: "Inicio",
      icon: <Home size={20} />,
      path: "/",
    },

    {
      name: "Agenda",
      icon: <Calendar size={20} />,
      path: "/agenda",
    },

    {
      name: "Estudiantes",
      icon: <Users size={20} />,
      path: "/students",
    },

    {
      name: "Pagos",
      icon: <Wallet size={20} />,
      path: "/payments",
    },

    {
      name: "Reportes",
      icon: <BarChart3 size={20} />,
      path: "/reports",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#111827] text-white p-6 hidden md:flex flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">

        <div className="bg-[#6C63FF] p-3 rounded-2xl">

          <GraduationCap size={26} />

        </div>

        <div>

          <h1 className="text-2xl font-bold">
            ClassTime
          </h1>

          <p className="text-sm text-gray-400">
            Academic Platform
          </p>

        </div>

      </div>

      {/* Links */}
      <nav className="space-y-3">

        {links.map((link) => (

          <NavLink
            key={link.name}
            to={link.path}

            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-2xl transition ${
                isActive
                  ? "bg-[#6C63FF]"
                  : "hover:bg-[#1f2937]"
              }`
            }
          >

            {link.icon}

            <span className="font-medium">
              {link.name}
            </span>

          </NavLink>

        ))}

      </nav>

      {/* Bottom Card */}
      <div className="mt-auto bg-[#1f2937] rounded-3xl p-5">

        <h3 className="text-xl font-bold">
          Upgrade 🚀
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Obtén estadísticas avanzadas y automatización.
        </p>

        <button className="bg-[#6C63FF] w-full py-3 rounded-2xl mt-5 font-semibold">
          Mejorar plan
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;