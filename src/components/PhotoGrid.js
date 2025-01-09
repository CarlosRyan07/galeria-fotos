import React from 'react';

function PhotoGrid({ photos, isLoading }) {
  if (isLoading) {
    // Mensagem de carregamento centralizada
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Carregando...
      </div>
    );
  }

  return (
    <div>
      {photos.length === 0 ? (
        // Mensagem centralizada para quando não há fotos
        <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
          Nenhuma foto encontrada
        </div>
      ) : (
        // Grid de fotos
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="border rounded overflow-hidden shadow hover:shadow-lg transition-all"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-48 object-cover"
              />
              <p className="text-center p-2">{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PhotoGrid;
