import React from "react";
import { usPropositions } from "../../types/OtherTypes/AboutPropositions";
import { useNavigate } from "react-router";

const UsPropositions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-custom-gradient w-full h-auto flex flex-col items-center justify-center px-6 md:px-10 py-12">

      <div className="my-8 w-full md:w-3/5 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center tracking-wide">
          Observa nuestras propuestas
        </h2>
      </div>


      <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {usPropositions.map((proposition, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <div className="relative group">

              <img
                src={proposition.image}
                alt=""
                className="object-cover w-full h-48 md:h-64"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition duration-300"></div>

              <p className="absolute bottom-4 left-4 text-xl md:text-2xl font-bold text-white group-hover:text-gray-300">
                {proposition.title.toUpperCase()}
              </p>
            </div>


            <div className="p-6 flex flex-col justify-between">
              <p className="text-gray-700 text-sm md:text-base mb-6">
                {proposition.text}
              </p>
              <button
                onClick={() => navigate(`/${proposition.link}`)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-base md:text-lg font-semibold py-3 rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
              >
                MOSTRAR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsPropositions;
