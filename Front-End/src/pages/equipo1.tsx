"use client";
import Head from 'next/head';
import { useState } from 'react';

const teamMembers = [
  { name: "Gato ProfeUni", role: "Dirección", department: "Dirección", image: "/imagenes/team/gatoprofeuni.webp"},
  { name: "Gato Profe", role: "Dirección", department: "Dirección", image: "/imagenes/team/gatoprofe.webp"},
  { name: "Botas", role: "Hardware", department: "Hardware", image: "/imagenes/team/botas.webp" },
  { name: "Bigotes", role: "Software", department: "Software", image: "/imagenes/team/bigotes.webp"},
  { name: "Beni", role: "Software", department: "Software", image: "/imagenes/team/beni.webp"},
  { name: "", role: "Estructuras & Mecanismos", department: "Estructuras & Mecanismos" },
  { name: "Sashimi", role: "Desarrollador", department: "Software", image: "/imagenes/team/sashimi.webp" },
  { name: "Gato Teleco", role: "Desarrollador", department: "Software", image: "/imagenes/team/gatoteleco.webp" },
  { name: "Gato", role: "Físico", department: "Físicos", image: "/imagenes/team/gatomodelo.webp" },
  { name: "Gato Invest", role: "Diseño", department: "Diseño", image: "/imagenes/team/gatoinvestigador.webp" },
  { name: "Gatoq", role: "Economía", department: "Economía", image: "/imagenes/team/beni.webp" },
];

const departments = [
  { name: "Dirección", image: "/imagenes/departments/direccion.png", imageActive: "/imagenes/departments/dir-fondo.png" },
  { name: "Software", image: "/imagenes/departments/software.png", imageActive: "/imagenes/departments/soft-fondo.png" },
  { name: "Estructuras & Mecanismos", image: "/imagenes/departments/estructuras.png", imageActive: "/imagenes/departments/est-fondo.png" },
  { name: "Físicos", image: "/imagenes/departments/fisicos.png", imageActive: "/imagenes/departments/fis-fondo.png" },
  { name: "Diseño", image: "/imagenes/departments/diseño.png", imageActive: "/imagenes/departments/dis-fondo.png" },
  { name: "Economía", image: "/imagenes/departments/economia.png", imageActive: "/imagenes/departments/eco-fondo.png" },
];

export default function Equipo() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [hoveredDepartment, setHoveredDepartment] = useState<string | null>(null);

  const handleMouseEnter = (department: string) => {
    setHoveredDepartment(department);
  };

  const handleMouseLeave = () => {
    setHoveredDepartment(null);
  };

  return (
    <>
      <Head>
        <title>Equipo - Innova</title>
        <meta name="Equipo" content="Pagina del equipo de Innova Physics" />
      </Head>

      <main className="relative flex flex-col items-center justify-center min-h-screen text-white p-8 bg-black bg-opacity-80"
        style={{ backgroundImage: "url('/imagenes/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        
        <h1 className="text-5xl font-bold text-white mb-12 uppercase tracking-wide transform translate-y-[-30px]">
          NUESTROS MIEMBROS
        </h1>

        <div className="flex justify-center space-x-12 mb-16">
          {departments.map(({ name, image, imageActive }) => (
            <button
              key={name}
              onClick={() => setSelectedDepartment(selectedDepartment === name ? null : name)}
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={handleMouseLeave}
              className="relative flex flex-col items-center justify-center transition-all duration-300 transform group w-32 h-32"
            >
              {/* Imagen de fondo (con filtro cuando se pasa el cursor) */}
              <img
                src={imageActive}
                alt={name}
                className={`w-32 h-32 object-contain transition-all duration-500 ease-in-out ${hoveredDepartment === name ? "opacity-100 scale-110 filter brightness-125 saturate-150" : "opacity-0 scale-100"}`}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
              />
              
              {/* Imagen del departamento (visible cuando no hay hover) */}
              <img
                src={image}
                alt={name}
                className={`w-32 h-32 object-contain transition-all duration-500 ease-in-out ${hoveredDepartment === name ? "opacity-0 scale-100" : "opacity-100 scale-100"}`}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 5 }}
              />
            </button>
          ))}
        </div>

        {/* Miembros del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {teamMembers
            .filter(member => member.department === selectedDepartment)
            .map(({ name, role, image }) => (
              <div key={name} className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                <div className="w-32 h-32 flex items-center justify-center text-white bg-gray-800 rounded-full">
                  <img src={image || "/avatar.png"} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                </div>
                <h2 className="text-xl font-semibold mt-4 text-gray-200">{name}</h2>
                <p className="text-sm text-gray-400">{role}</p>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
