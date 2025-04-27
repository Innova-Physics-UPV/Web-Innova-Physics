import React from "react";
import Gallery from "@/components/common/Gallery";
import BaseSection from "@/components/common/BaseSection";
import { photos } from "@/data/aboutUsData"; // Importa las fotos desde el archivo de datos

const AboutUsSection: React.FC = () => {
  return (
    <BaseSection title="¿QUIÉNES SOMOS?" >
      <div className="relative flex flex-col md:flex-row gap-4 md:gap-10">
        <div className="flex-1">
          <p className="pt-5 leading-relaxed text-base sm:text-sm md:text-xl">
            Innova physics UPV es un grupo multidisciplinar de estudiantes interesados en las áreas
            de la física, ingeniería y tecnología.<br />
            Nuestra misión es diseñar y construir una fuente
            de neutrones para aplicarla a la terapia y diagnóstico del cáncer de una manera
            revolucionaria y efectiva. Trabajamos bajo el programa Generación Espontánea, el cual
            está apoyado y financiado por la Universidad Politécnica de Valencia.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Gallery photos={photos} />
        </div>
      </div>
    </BaseSection>
  );
};

export default AboutUsSection;