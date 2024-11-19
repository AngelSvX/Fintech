import React from "react";
import Carousel from "react-multi-carousel";
import CarruselUno from "../../lib/images/CarrouselImages/CarruselUno.jpg";
import CarruselDos from "../../lib/images/CarrouselImages/CarruselDos.jpg";
import CarruselTres from "../../lib/images/CarrouselImages/CarruselTres.jpg";
import { IoIosArrowForward } from "react-icons/io";

const HeaderFintech: React.FC = () => {
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
    <div className="flex justify-center mb-14 px-4 md:px-0">
      <section className="w-full md:w-4/5 flex flex-col md:flex-row">
        <section className="text-section w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h3 className="text-subTitle font-bold text-[1.4rem] md:text-[1.6rem] pb-3 md:pb-5">
            PLATAFORMA REGIONAL DIGITAL
          </h3>
          <h1 className="text-mainTitle font-bold sm:text-[3rem] md:text-[5rem] text-[2.2rem] pb-3 md:pb-5 leading-none">
            Observatorio Mujer Fintech
          </h1>
          <h5 className="text-textDescription text-[1.2rem] md:text-[1.7rem] text-justify font-medium pb-3 md:pb-5 leading-tight">
            Foros, proyectos e iniciativas centradas en la Mujer FinTech en
            Perú. Este es un proyecto de la Mesa de Trabajo Mujer FinTech de la
            Asociación FinTech del Perú
          </h5>
          <button
            className="px-8 md:px-[5.5rem] py-3 md:py-4 bg-custom-gradient rounded-lg text-white text-base md:text-lg font-bold flex flex-row items-center justify-evenly"
            onClick={() => {}}
          >
            <p>Ver más</p>
            <IoIosArrowForward size={'20px'} />
          </button>
        </section>

        <section className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay
            className="w-full md:w-11/12 h-[40vh] md:h-[65vh]"
          >
            <div>
              <img
                className="w-full h-full object-cover rounded-lg select-none touch-none"
                draggable={false}
                src={CarruselUno}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-lg select-none touch-none"
                src={CarruselDos}
                draggable={false}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-lg select-none touch-none"
                src={CarruselTres}
                draggable={false}
                alt=""
              />
            </div>
          </Carousel>
        </section>
      </section>
    </div>
  );
};

export default HeaderFintech;
