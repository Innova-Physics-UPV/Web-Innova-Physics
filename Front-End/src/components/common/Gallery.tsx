import React, { useState, useEffect, useRef } from "react";

interface Photo {
  url: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
  autoPlayInterval?: number;
}

const Gallery: React.FC<GalleryProps> = ({ photos, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef<NodeJS.Timeout | null>(null);

  const resetIntervals = () => {
    if (progressRef.current) clearInterval(progressRef.current);
    if (slideRef.current) clearInterval(slideRef.current);

    // Reiniciar progreso y temporizador
    const progressStep = (50 / autoPlayInterval) * 100;

    progressRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + progressStep));
    }, 50);

    slideRef.current = setInterval(() => {
      setProgress(0);
      setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
  };

  useEffect(() => {
    if (isPlaying) {
      resetIntervals();
    }

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
      if (slideRef.current) clearInterval(slideRef.current);
    };
  }, [isPlaying, autoPlayInterval, photos.length]);

  const handleManualChange = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    resetIntervals();
  };

  if (!photos || photos.length === 0) {
    return <p>No hay imágenes para mostrar.</p>;
  }

  const radius = 12; // Radio del círculo SVG
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="gallery-container relative w-full h-96 md:h-[500px]">
      <div className="relative h-full w-full">
        {photos.map((photo, index) => (
          <img
            key={photo.url}
            src={photo.url}
            alt={photo.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {photos.map((_, index) => (
            <div key={index} className="relative flex items-center justify-center">
              {index === currentIndex ? (
                <>
                  {/* Círculo de progreso SVG */}
                  <svg
                    className="absolute w-7 h-7 transform -rotate-90"
                    viewBox="0 0 32 32"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r={radius}
                      stroke="white"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      className="transition-all duration-100 ease-linear"
                    />
                  </svg>
                  {/* Punto central */}
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </>
              ) : (
                <button
                  onClick={() => handleManualChange(index)}
                  className="w-2.5 h-2.5 rounded-full border border-white bg-transparent"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
