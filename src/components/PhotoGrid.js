import React from 'react';

function PhotoGrid({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img
              src={photo.url}
              alt={photo.name}
              className="w-full h-48 object-cover rounded-lg hover:shadow-lg hover:scale-105 transition-transform"
            />
            <p className="text-center mt-2">{photo.name}</p>
          </div>
        ))
      ) : (
        <div className="text-center col-span-full text-gray-600">
          <p className="text-lg font-semibold">Nenhuma foto encontrada</p>
          <p className="text-sm">Tente outra palavra-chave.</p>
        </div>
      )}
    </div>
  );
}

export default PhotoGrid;
