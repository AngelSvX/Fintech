import React, { useEffect } from "react";
import { useApi } from "../context/ApiContext";

function Events() {
  const { getEvents, listEvents } = useApi();

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-8 px-4 py-6">
      {listEvents.length > 0 ? (
        listEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{event.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{event.content}</p>
            {event.imgUrl && (
              <img
                src={event.imgUrl}
                alt="Imagen del evento"
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            )}
            <div className="flex justify-between items-center">
              {event.hrefUrl ? (
                <a
                  href={event.hrefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm"
                >
                  Más detalles
                </a>
              ) : (
                <p className="text-gray-400 italic text-sm">URL desconocida</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic text-center mt-10">No hay eventos disponibles</p>
      )}
    </div>
  );
}

export default Events;
