import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  url?: string;
  shape?: 'circle' | 'rect'; // Nuevo prop para distinguir forma
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, title = "", subtitle, url, shape = 'circle', className = "", children }) => {
  const [imgSrc, setImgSrc] = useState<string>(image || "");
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const fallbackImage = "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262948/avatar_xubp5u.webp";

  useEffect(() => {
    setImgSrc(image || "");
    setImgLoaded(false);
  }, [image]);

  useEffect(() => {
    if (!imgSrc) return;
    const img = new Image();
    img.src = imgSrc;
    const handleLoad = () => setImgLoaded(true);
    const handleError = () => setImgSrc(fallbackImage);
    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    const timeoutId = setTimeout(() => {
      if (!imgLoaded && imgSrc !== fallbackImage) setImgSrc(fallbackImage);
    }, 5000);
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
      clearTimeout(timeoutId);
    };
  }, [imgSrc, imgLoaded]);

  const handleClick = () => { if (url) window.location.href = url; };

  // Determinar clases de contenedor de imagen
  const imgContainerClasses = shape === 'circle'
    ? 'w-full aspect-square overflow-hidden rounded-full mb-4'
    : 'w-full mb-4';

  const imgClasses = shape === 'circle'
    ? 'w-full h-full object-cover'
    : 'w-full object-contain';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: 90 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={`w-full p-4 rounded-xl shadow-md bg-background ${url ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
    >
      {imgSrc && (
        <div className={imgContainerClasses}>
          <img
            src={imgSrc}
            alt={title}
            className={imgClasses}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (imgSrc !== fallbackImage) setImgSrc(fallbackImage);
            }}
          />
        </div>
      )}
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {subtitle && <p className="text-sm text-description">{subtitle}</p>}
      {children}
    </motion.div>
  );
};

export default Card;
