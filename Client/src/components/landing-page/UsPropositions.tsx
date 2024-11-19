import React from "react";
import { usPropositions } from '../../types/OtherTypes/AboutPropositions';
import { useNavigate } from "react-router";

const UsPropositions: React.FC = () => {

  const navigate = useNavigate()

  return(
    <div className="bg-custom-gradient w-full h-auto flex flex-col items-center justify-center px-4 md:px-0">
      <div className="my-8 w-full md:w-4/5 flex items-center justify-center">
        <p className="text-3xl md:text-5xl font-bold text-white text-center">Observa nuestras propuestas</p>
      </div>
      <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-14">
        {usPropositions.map((proposition, index) => (
          <div key={index} className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg">
            <div className="image w-full md:w-4/12 p-3">
              <img src={proposition.image} alt="" className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"/>
            </div>
            <div className="text-and-button w-full md:w-8/12 py-2 px-3 flex flex-col justify-between">
              <div className="text mb-4">
                <p className="text-xl md:text-3xl font-bold text-mainTitle">{proposition.title.toUpperCase()}</p>
                <p className="text-textDescription text-base md:text-lg">{proposition.text}</p>
              </div>
              <div className="flex justify-end">
                <button onClick={() => {
                  navigate(`/${proposition.link}`)
                }} className="bg-custom-gradient w-full md:w-2/4 h-10 md:h-14 text-white text-base md:text-xl font-semibold rounded-lg">
                  MOSTRAR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsPropositions;
