import React, { useEffect } from 'react';
import { useApi } from '../context/ApiContext';

function Posts() {
  const { listPosts, getPosts } = useApi();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-8 px-4 py-6">
      {listPosts.length > 0 ? (
        listPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            {post.imgUrl && (
              <img
                src={post.imgUrl}
                alt="Imagen de la publicación"
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            )}
            <div className="flex justify-between items-center">
              {post.hrefUrl ? (
                <a
                  href={post.hrefUrl}
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
        <p className="text-gray-500 italic text-center mt-10">No hay publicaciones disponibles</p>
      )}
    </div>
  );
}

export default Posts;
