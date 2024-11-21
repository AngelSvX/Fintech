import React from 'react';
import { useNavigate } from 'react-router';

function NotFound() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">

      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[15rem] font-extrabold text-gray-600 opacity-10 animate-pulse">
          404
        </h1>
      </div>

      <h1 className="text-6xl font-bold text-red-500 drop-shadow-lg">Vaya!</h1>
      <p className="mt-4 text-lg text-gray-300">
        La página que buscas no está disponible
      </p>

      <button
        onClick={() => navigate('/')}
        className="relative mt-8 px-6 py-3 bg-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
      >
        Go Back Home
      </button>
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-ping"></div>

    </div>
  );
}

export default NotFound;