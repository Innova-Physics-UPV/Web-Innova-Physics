import { Department } from "@/types";

export const subDeptStructure: Department[] = [
  {
    name: "Tech",
    image: "/logos/departamentos/Tech.png",
    hoverImage: "/logos/departamentos/Tech_hover.png",
    subDepartments: [
      { name: "Software", image: "/logos/departamentos/Software.png", hoverImage: "/logos/departamentos/Software_hover.png" },
      { name: "Hardware", image: "/logos/departamentos/Hardware.png", hoverImage: "/logos/departamentos/Hardware_hover.png" },
      { name: "Applied Physics", image: "/logos/departamentos/AppliedPhysics.png" , hoverImage: "/logos/departamentos/AppliedPhysics_hover.png"},
      { name: "Structures & Design", image: "/logos/departamentos/Structures&Design.png", hoverImage: "/logos/departamentos/Structures&Design_hover.png" },
    ],
  },
  {
    name: "Operations",
    image: "/logos/departamentos/Operations.png",
    hoverImage: "/logos/departamentos/Operations_hover.png",
    subDepartments: [
      { name: "Economics", image: "/logos/departamentos/Economics.png", hoverImage: "/logos/departamentos/Economics_hover.png" },
      { name: "Administrative", image: "/logos/departamentos/Administrative.png",  hoverImage: "/logos/departamentos/Administrative_hover.png" },
    ],
  },
  {
    name: "Marketing",
    image: "/logos/departamentos/Marketing.png",
    hoverImage: "/logos/departamentos/Marketing_hover.png",
    subDepartments: [
      { name: "Imagen y engagement", image: "/logos/departamentos/Imagenyengagement.png", hoverImage: "/logos/departamentos/Imagenyengagement_hover.png" },
      { name: "Relationships & Partners", image: "/logos/departamentos/Relationships&Partners.png", hoverImage: "/logos/departamentos/Relationships&Partners_hover.png" },
      { name: "Social Media", image: "/logos/departamentos/SocialMedia.png", hoverImage: "/logos/departamentos/SocialMedia_hover.png" },
    ],
  },
];

export const teamMembers = [
    { name: "Mateo Gajić Sales", role: "Dirección", department: "Applied Physics", image: "/imagenes/team/gatoprofeuni.webp"},
    { name: "Debinamaca Ainoo Pérez", role: "Dirección", department: "Applied Physics", image: "/imagenes/team/gatoprofe.webp"},
    { name: "Marc Sanchis Llinares", role: "Hardware", department: "Hardware", image: "/imagenes/team/botas.webp" },
    { name: "Juan Manuel Flores de la Cruz", role: "Software", department: "Software", image: "/imagenes/team/bigotes.webp"},
    { name: "Mari Carmen Rea Rejia", role: "Software", department: "Software", image: "/imagenes/team/beni.webp"},
    { name: "Laura Gil Bosch", role: "Estructuras & Mecanismos", department: "Applied Physics" },
    { name: "Núria Vanyó Santonja", role: "Desarrollador", department: "Software", image: "/imagenes/team/sashimi.webp" },
    { name: "Ethan Montes Benavent", role: "Desarrollador", department: "Social Media", image: "/imagenes/team/gatoteleco.webp" },
    { name: "María Morón Romero", role: "Físico", department: "Applied Physics", image: "/imagenes/team/gatomodelo.webp" },
    { name: "Paula Almeida Guijarro", role: "Diseño", department: "Applied Physics", image: "/imagenes/team/gatoinvestigador.webp" },
    { name: "Víctor Martín Kruglova", role: "Economía", department: "Economics", image: "/imagenes/team/beni.webp" },
    { name: "Marco Nieto Pérez", role: "Administrative", department: "Administrative", image: "/imagenes/team/beni.webp" },
    { name: "Lucas Tarragó Mahiques", role: "Administrative", department: "Administrative", image: "/imagenes/team/beni.webp" },
  ];