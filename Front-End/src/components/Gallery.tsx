import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  url: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
}

const photos = [
  { 
    url: 'https://media.gettyimages.com/id/1393902827/es/foto/new-york-new-york-tinky-winky-dipsy-laa-laa-and-po-greet-fans-as-the-teletubbies-celebrate.jpg?s=612x612&w=gi&k=20&c=aoQm-t0pSjp8exy_S4SoVDToqD352vPO-XE0Efgrogg=', 
    alt: 'teletubies gafas de sol' 
  },
  {
    url: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/11/10/16681060461616.jpg',
    alt: 'teletubies2'
  },{ 
    url: 'https://i.scdn.co/image/ab6761610000e5eb370c266ab8087ee9de6631b0', 
    alt: 'Teletubbies grupo' 
  },{ 
    url: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/03/14/imagen-promocional-de-la-coleccion-christian-cowan-x-teletubbies.jpeg', 
    alt: 'Teletubbies posando' 
  }

];




const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container relative w-full h-96 md:h-[500px]">
      {/* Container principal */}
      <div className="relative h-full w-full">
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].alt}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
        />
        
        {/* Botones de navegación */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicadores de posición */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-5'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;