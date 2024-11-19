import React from "react";
import { logos } from "../../types/LogoTypes/Logos";

const LogoCarrousel: React.FC = () => {
  return (
    <div className="w-full h-[150px] bg-custom-gradient flex items-center justify-center">
      <div className="w-11/12 md:w-4/5 flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0">
        {logos.map((logo, index) => {
          const logoName = Object.keys(logo)[0];
          const logoURL = logo[logoName];
          return (
            <div key={index} className="w-24 md:w-auto">
              <img src={logoURL} alt={logoName} className="object-contain w-full h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarrousel;
