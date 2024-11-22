import { useState } from "react";
import { FiFileText, FiHome, FiLogOut, FiUser } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={`bg-gray-900 text-white h-screen fixed top-0 left-0 flex flex-col justify-between ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      <div>
        <button
          className="p-4 text-xl bg-gray-800 hover:bg-gray-700 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "➖" : "➕"}
        </button>
        <nav className="mt-4 flex flex-col space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-lg ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            <FiHome />
            {isOpen && <span>Inicio</span>}
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-lg ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            <FiFileText />
            {isOpen && <span>Posts</span>}
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-lg ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            <FiUser />
            {isOpen && <span>Usuarios</span>}
          </NavLink>
        </nav>
      </div>
      <button
        className="flex items-center gap-4 p-4 rounded-lg hover:bg-red-600"
        onClick={handleLogout}
      >
        <FiLogOut />
        {isOpen && <span>Salir</span>}
      </button>
    </div>
  );
};

export default Sidebar;
