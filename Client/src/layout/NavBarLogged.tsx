import React from 'react'
import { useNavigate } from 'react-router'

function NavBarLogged() {

  const navigate = useNavigate()

  return (
    <header className="h-[100px] flex justify-center items-center mb-6 px-4 md:px-0">
    <div className="w-full max-w-7xl flex items-center justify-between">

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
  )
}

export default NavBarLogged