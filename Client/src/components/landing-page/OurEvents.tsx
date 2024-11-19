import React from "react";
import ourEvents from "../../types/OtherTypes/OurEvents";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const OurEvents: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-2 px-4 md:px-0">
      <div className="w-full md:w-4/5 text-3xl md:text-5xl font-bold my-8 flex justify-center text-mainTitle">
        Nuestros eventos
      </div>
      <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {ourEvents.map((event, index) => {
          return (
            <div key={index} className="w-full">
              <div className="w-full h-48 md:h-60 overflow-hidden rounded-t-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 border-l-2 border-r-2 border-b-2 rounded-b-xl border-black h-40 md:h-56">
                <div>
                  <p className="text-lg md:text-xl font-bold text-mainTitle">
                    {event.title}
                  </p>
                </div>
                <div>
                  <p className="font-normal text-mainTitle text-justify text-sm md:text-base overflow-clip">
                    {event.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-1/4 flex items-center justify-around my-8 md:my-10">
        <div className="w-12 h-12 md:w-20 md:h-20 bg-custom-gradient rounded-lg flex items-center justify-center text-white">
          <IoIosArrowDropleft size={30} className="cursor-pointer"/>
        </div>
        <div className="w-12 h-12 md:w-20 md:h-20 bg-custom-gradient rounded-lg flex items-center justify-center text-white">
          <IoIosArrowDropright size={30} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
