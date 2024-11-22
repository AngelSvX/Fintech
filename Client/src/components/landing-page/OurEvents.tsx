import React from "react";
import ourEvents from "../../types/OtherTypes/OurEvents";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const OurEvents: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-8 px-6 md:px-10 bg-gray-50">

      <div className="w-full md:w-3/4 text-3xl md:text-5xl font-bold my-8 text-center text-gray-800 tracking-wide">
        Nuestros Eventos
      </div>

      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourEvents.map((event, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >

            <div className="w-full h-56 md:h-64 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-full"
              />
            </div>


            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base text-justify line-clamp-3">
                {event.text}
              </p>
            </div>
          </div>
        ))}
      </div>


      <div className="w-full md:w-1/3 flex items-center justify-center gap-8 mt-10">
        <button className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#FF3A58] via-[#FF5378] to-[#EC2F8A] rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110">
          <IoIosArrowDropleft size={32} />
        </button>
        <button className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#FF3A58] via-[#FF5378] to-[#EC2F8A] rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110">
          <IoIosArrowDropright size={32} />
        </button>
      </div>
    </div>
  );
};

export default OurEvents;
