import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiHome, FiUser, FiFileText, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      {/* Toggle Sidebar */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className={`text-2xl font-bold ${isOpen ? "block" : "hidden"}`}>
          Dashboard
        </h1>
        <button
          className="text-white focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? "➖" : "➕"}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 mt-6 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg ${
              isActive ? "bg-pink-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FiHome className="text-xl" />
          <span className={`${isOpen ? "block" : "hidden"}`}>Inicio</span>
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg ${
              isActive ? "bg-pink-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FiFileText className="text-xl" />
          <span className={`${isOpen ? "block" : "hidden"}`}>Publicaciones</span>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg ${
              isActive ? "bg-pink-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FiFileText className="text-xl" />
          <span className={`${isOpen ? "block" : "hidden"}`}>Eventos</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg ${
              isActive ? "bg-pink-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FiUser className="text-xl" />
          <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
        </NavLink>
      </nav>

      {/* Logout Section */}
      <div
        className="flex items-center gap-4 px-4 py-3 mt-auto bg-red-600 cursor-pointer hover:bg-red-700"
        onClick={handleLogout}
      >
        <FiLogOut className="text-xl" />
        <span className={`${isOpen ? "block" : "hidden"}`}>Cerrar sesión</span>
      </div>
    </div>
  );
};

export default Sidebar;
