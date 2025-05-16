import React from "react";
import BaseSection from "@/components/common/BaseSection";
import Card from "@/components/common/Card";

const sponsors = [
  { id: "1", name: "Generación espontanea", logo: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391948/GeneracionEspontanea_rqny7g.png",url:"https://www.upv.es/entidades/adge/", tier: "" },
  { id: "2", name: "UPV", logo: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391949/UPV_lswqut.png",url:"https://www.upv.es/", tier: "" },
  { id: "3", name: "Escuela superior de telecomunicaciones",logo:"https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391947/ETSIT_pax9tw.png",url:"https://www.upv.es/entidades/etsit/", tier:""},
  {id:"4", name:"Instituto de matematica pura y aplicada",logo:"https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747391948/IUMPA_ovdz1t.png",url:"https://www.upv.es/entidades/IMPA/",tier:""},
  // Add more sponsors here
];

const SponsorsSection: React.FC = () => {
  return (
    <BaseSection title="SPONSORS">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        { sponsors.map((s) => (
  <Card
    key={s.id}
    title={s.name}
    image={s.logo}
    url={s.url}
    shape="rect"            // <- aquí indicas logo rectangular
    className="p-6 !bg-gray-800 hover:shadow-lg transition-shadow duration-300"
  />
)) }

      </div>

      {/* Button 
      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-foreground text-white font-semibold rounded-lg hover:bg-primario-200 transition-colors"
          onClick={() => (window.location.href = "/sponsors")}
        >
          View All Sponsors
        </button>
      </div>*/}
    </BaseSection>
  );
};

export default SponsorsSection;