import React, { useEffect } from 'react'
import { useApi } from '../context/ApiContext';

function Projects() {
  const { listProjects, getProjects } = useApi();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
<div className="w-full flex items-center justify-center flex-wrap px-4 gap-8">
  {listProjects.length > 0 ? (
    listProjects.map((project, index) => (
      <div
        key={index}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg p-6 w-full max-w-sm hover:scale-105 transition-transform duration-300 shadow-lg"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="flex items-center gap-2 text-sm mb-4">
            <span className="font-bold">Lugar:</span>
            {project.country}
          </p>
          {project.hrefUrl ? (
            <a
              href={project.hrefUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Más detalles
            </a>
          ) : (
            <p className="text-gray-200 italic">URL desconocida</p>
          )}
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-200 italic text-center mt-10">
      No hay proyectos disponibles
    </p>
  )}
</div>
  );
}
export default Projects