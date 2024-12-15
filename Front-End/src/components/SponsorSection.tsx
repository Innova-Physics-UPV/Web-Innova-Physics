import React from 'react';

const SponsorSection = () => {
  const sponsors = [
    {
      id:1,
      name: "Laa-Laa",
      tier: "platino",
      logo: "https://m.media-amazon.com/images/I/41WNL3eNPfL.jpg"
    },
    {
      id:2,
      name: "Po",
      tier: "oro", 
      logo: "https://m.media-amazon.com/images/I/813VivuKIFL.jpg"
    },
    {id:3,
      name: "Tinkiwinki",
      tier: "uranio",
      logo: "https://cdn.media.amplience.net/i/frasersdev/92740290_o?fmt=auto&upscale=false&w=767&h=767&sm=scaleFit&$h-ttl$"
    },
    {id:4,
      name: "Dypsi",
      tier:"carbon",
      logo: "https://azucren.es/10953-large_default/teletubbies-dipsy-34351.jpg"
    }
  ];



  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 items-center">
        <h2 className="text-center">Sponsors</h2>
        
        <div className="flex flex-wrap items-center justify-center pb-6 gap-8 mb-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-shrink-0 w-64 flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-32 h-20 object-contain mb-4"
              />
              <h3>{sponsor.name}</h3>
              <span className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                {sponsor.tier}              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
  <button
    onClick={() => window.location.href = '/sponsors'}
    className="bg-foreground hover:bg-primario-200"
  >
    View All Sponsors
    
  </button>
</div>
      </div>
    </section>
  );
};

export default SponsorSection;
