import React from "react";
import BaseSection from "@/components/common/BaseSection";
import Card from "@/components/common/Card";

const sponsors = [
  { id: "1", name: "Sponsor 1", logo: "imagenes/sponsors/CERN_logo.svg", tier: "Gold" },
  { id: "2", name: "Sponsor 2", logo: "imagenes/sponsors/UPV_Logo.png", tier: "Silver" },
  // Add more sponsors here
];

const SponsorsSection: React.FC = () => {
  return (
    <BaseSection title="SPONSORS">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {sponsors.map((sponsor) => (
          <Card
            key={sponsor.id}
            image={sponsor.logo}
            title={sponsor.name}
            className="p-6 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <span className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              {sponsor.tier}
            </span>
          </Card>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <button
          className="px-6 py-2 bg-foreground text-white font-semibold rounded-lg hover:bg-primario-200 transition-colors"
          onClick={() => (window.location.href = "/sponsors")}
        >
          View All Sponsors
        </button>
      </div>
    </BaseSection>
  );
};

export default SponsorsSection;