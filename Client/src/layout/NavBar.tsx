import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../lib/images/LogosFintech/pngblack.png";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="h-[100px] flex justify-center items-center mb-6 px-4 md:px-0">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex w-1/3 md:w-1/6 justify-start">
          <img
            className="object-cover w-[120px] md:w-auto cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Menu Toggle Button for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-navLink focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex-row ${
            menuOpen ? "flex" : "hidden"
          } md:flex md:w-3/6 items-center justify-center space-y-4 md:space-y-0 bg-white md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none absolute md:static top-[100px] left-0 w-full md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-1/2 md:justify-around justify-center items-center md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-navLink hover:text-pink-600 transition-colors"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-navLink hover:text-pink-600 transition-colors"
              >
                Nosotros
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Buttons Section */}
        <div className="hidden md:flex items-center justify-center md:w-2/6 space-x-4">
          <button className="relative inline-flex items-center justify-center p-[2.9px] overflow-hidden text-black rounded-lg group bg-gradient-to-br from-[#FF3A58] via-[#FF5378] to-[#EC2F8A] hover:text-white transition-all">
            <span className="relative px-8 py-3 transition-all ease-in duration-200 bg-white rounded-md group-hover:bg-opacity-0">
              <span className="bg-gradient-to-br from-[#FF3A58] via-[#FF5378] to-[#EC2F8A] inline-block text-transparent bg-clip-text group-hover:text-white font-bold text-lg" onClick={() => navigate("/contact")}>
                Contáctanos
              </span>
            </span>
          </button>
          <button
            className="px-8 py-[15px] bg-custom-gradient rounded-lg text-white text-lg font-bold transition-all hover:shadow-lg"
            onClick={() => navigate("/login")}
          >
            Ingresar
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
