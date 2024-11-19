import React from 'react'
import imageOne from "./lib/images/uno.jpg";
import imageTwo from "./lib/images/dos.jpg";
import imageTree from "./lib/images/tres.jpg";
import imageFour from "./lib/images/cuatro.jpg";
import Carousel from "react-multi-carousel";

function carrousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2500}>
        <div className="relative w-full h-[65vh]">
          {/* Imagen del carrusel */}
          <img
            src={imageOne}
            alt="Imagen del carrusel"
            className="w-full h-full object-cover"
          />

          {/* Botón centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Mi Botón
            </button>
          </div>
        </div>

        <div className="relative w-full h-[65vh]">
          {/* Imagen del carrusel */}
          <img
            src={imageTwo}
            alt="Imagen del carrusel"
            className="w-full h-full object-cover"
          />

          {/* Botón centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Mi Botón
            </button>
          </div>
        </div>
        <div className="relative w-full h-[65vh]">
          {/* Imagen del carrusel */}
          <img
            src={imageTree}
            alt="Imagen del carrusel"
            className="w-full h-full object-cover"
          />

          {/* Botón centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Mi Botón
            </button>
          </div>
        </div>
        <div className="relative w-full h-[65vh]">
          {/* Imagen del carrusel */}
          <img
            src={imageFour}
            alt="Imagen del carrusel"
            className="w-full h-full object-cover"
          />

          {/* Botón centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
              Mi Botón
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default carrousel