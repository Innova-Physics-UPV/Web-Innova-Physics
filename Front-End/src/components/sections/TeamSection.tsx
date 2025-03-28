import React from "react";
import BaseSection from "../common/BaseSection";
import Card from "../common/Card";

const teamMembers = [
  { name: "John Doe", position: "Astronauta", image: "/imagenes/team/botas.webp" },
  { name: "Jane Doe", position: "Economista", image: "/imagenes/team/ingenieronuclear.webp" },
  { name: "Cat One", position: "Informático", image: "/imagenes/team/gatoinformatico.webp" },
  { name: "Cat Two", position: "Ingeniería de Telecomunicaciones", image: "/imagenes/team/gatoteleco.webp" },
  { name: "Cat Three", position: "Departamento artístico", image: "/imagenes/team/sashimi.webp" },
  { name: "Cat Four", position: "Research", image: "/imagenes/team/gatoinvestigador.webp" }
];

const TeamSection: React.FC =  () => {
  return (
    <BaseSection title="EQUIPO" className="relative z-10">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            image={member.image}
            title={member.name}
            subtitle={member.position}
          />
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-foreground text-white font-semibold rounded-lg hover:bg-primario-200 transition-colors"
          onClick={() => (window.location.href = "/equipo")}
        >
          Conoce Más
        </button>
      </div>
    </BaseSection>
  );
};

export default TeamSection;

