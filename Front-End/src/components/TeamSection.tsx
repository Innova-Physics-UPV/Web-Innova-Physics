import React from "react";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Laa-Laa",
      position: "Cargo 1",
      image: "https://m.media-amazon.com/images/I/41WNL3eNPfL.jpg"
    },
    {
      name: "Po",
      position: "Cargo 2", 
      image: "https://m.media-amazon.com/images/I/813VivuKIFL.jpg"
    },
    {
      name: "Tinkiwinki",
      position: "Cargo 3",
      image: "https://cdn.media.amplience.net/i/frasersdev/92740290_o?fmt=auto&upscale=false&w=767&h=767&sm=scaleFit&$h-ttl$"
    },{
      name: "Dypsi",
      position: "Cargo 4",
      image: "https://azucren.es/10953-large_default/teletubbies-dipsy-34351.jpg"
    }

  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto text-center">
        <h2>EQUIPO</h2>
        <div className="flex overflow-x-auto flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-64">
              <img
                src={member.image}
                alt={`Miembro del equipo ${member.name}`}
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
              <h3>{member.name}</h3>
              <p className="text-description">{member.position}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button 
            className="bg-foreground hover:bg-primario-200"
            onClick={() => (window.location.href = "/about")}
          >
            Conoce Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;