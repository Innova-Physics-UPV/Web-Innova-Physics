import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

const VideoBackground: React.FC = () => {
  return (

    <div className="relative top-0 left-0 z-5 w-full">
     
      {/* Video de fondo */}
      <video autoPlay loop muted className= "w-full">
        <source src="/videos/Demo_Planos.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
  
    </div>
  );
};

export default VideoBackground;
