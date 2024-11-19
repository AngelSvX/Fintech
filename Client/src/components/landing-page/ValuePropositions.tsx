import React from "react";
import Value from "../../lib/svg/ValorSection.svg";
import { propositions } from "../../types/OtherTypes/Propositions";

const ValuePropositions: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 lg:px-0">
      <section className="w-full lg:w-4/5 my-14 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-10 lg:space-y-0">
        
        {/* SVG Section */}
        <section className="svg-cont w-full lg:w-7/12 flex items-center justify-center mb-6 lg:mb-0">
          <img src={Value} alt="Value Proposition" className="w-full max-w-md md:max-w-lg lg:max-w-none object-cover" />
        </section>

        {/* Text Section */}
        <section className="text-cont w-full lg:w-5/12 text-center lg:text-left space-y-6 px-4 lg:px-0">
          <div className="text mb-6">
            <h3 className="text-subTitle font-bold text-lg md:text-xl lg:text-2xl pb-2">
              PROPUESTA DE VALOR
            </h3>
            <h1 className="text-mainTitle font-bold text-xl md:text-2xl lg:text-3xl pb-4 leading-tight">
              Construimos un mapa para incrementar el nivel de cooperación y el liderazgo de la{" "}
              <span className="bg-gradient-to-br from-[#FF3A58] via-[#FF5378] to-[#EC2F8A] bg-clip-text text-transparent">
                Mujer FinTech
              </span>
            </h1>
            <p className="text-textDescription text-base md:text-lg lg:text-xl font-medium leading-snug">
              Conecta con organizaciones que lideran múltiples acciones para el desarrollo de la Mujer en nuestra industria.
            </p>
          </div>

          {/* Propositions Section */}
          <div className="value grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-6">
            {propositions.map((proposition, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center lg:items-start text-center lg:text-left space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="bg-custom-gradient rounded-lg p-3 w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 flex items-center justify-center">
                  <img src={proposition.icon} alt={proposition.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <p className="font-bold text-base md:text-lg lg:text-xl text-mainTitle">{proposition.title}</p>
                  <p className="text-textDescription text-sm md:text-base lg:text-lg">{proposition.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default ValuePropositions;
