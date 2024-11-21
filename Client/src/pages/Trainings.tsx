import React, { useEffect } from 'react'
import { useApi } from '../context/ApiContext';

function Trainings() {
  const { listTrainings, getTrainings } = useApi();

  useEffect(() => {
    getTrainings();
  }, [getTrainings]);

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-8 px-4 py-6">
      {listTrainings.length > 0 ? (
        listTrainings.map((training, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md p-6 flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{training.title}</h2>
            <p className="text-gray-600 text-center mb-4">{training.content}</p>
            {training.imgUrl && (
              <img
                src={training.imgUrl}
                alt="Training"
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            )}
            {training.hrefUrl ? (
              <a
                href={training.hrefUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Más detalles
              </a>
            ) : (
              <p className="text-gray-500 italic">Url desconocida</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-xl">No hay capacitaciones disponibles</p>
      )}
    </div>
  );
}

export default Trainings;
