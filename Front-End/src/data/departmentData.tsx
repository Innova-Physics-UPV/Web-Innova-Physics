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
      { name: "Image & Engagement", image: "/logos/departamentos/Imagenyengagement.png", hoverImage: "/logos/departamentos/Imagenyengagement_hover.png" },
      { name: "Relationships & Partners", image: "/logos/departamentos/Relationships&Partners.png", hoverImage: "/logos/departamentos/Relationships&Partners_hover.png" },
      { name: "Social Media", image: "/logos/departamentos/SocialMedia.png", hoverImage: "/logos/departamentos/SocialMedia_hover.png" },
    ],
  },
];

export const teamMembers = [
  { name: "Mateo Gajić Sales", role: "Dirección", department: "Applied Physics", image: "/imagenes/team/Mateo_Gajić_Sales.png" },
  { name: "Debinamaca Ainoo Pérez", role: "Dirección", department: "Applied Physics", image: "/imagenes/team/Debinamaca_Ainoo_Pérez.png" },
  { name: "Laura Gil Bosch", role: "Estructuras & Mecanismos", department: "Applied Physics", image: "/imagenes/team/Laura_Gil_Bosch.png" },
  { name: "María Morón Romero", role: "Físico", department: "Applied Physics", image: "/imagenes/team/María_Morón_Romero.png" },
  { name: "Paula Almeida Guijarro", role: "Diseño", department: "Applied Physics", image: "/imagenes/team/Paula_Almeida_Guijarro.png" },
  { name: "Juan Manuel Flores de la Cruz", role: "Software", department: "Software", image: "/imagenes/team/Juan_Manuel_Flores_de_la_Cruz.jpg" },
  { name: "Mari Carmen Rea Rejia", role: "Software", department: "Software", image: "/imagenes/team/Mari_Carmen_Rea_Rejia.png" },
  { name: "Marc Sanchis Llinares", role: "Hardware", department: "Hardware", image: "/imagenes/team/Marc_Sanchis_Llinares.png" },
  {name: "Pau Anyó Calabuig", role: "Hardware", department: "Hardware", image: "/imagenes/team/Pau_Anyó_Calabuig.png" },
  {name: "Marta Molés Herrero", role: "Estructuras", department: "Structures & Design", image: "/imagenes/team/Marta_Molés_Herrero.png" },
  {name: "Andrés Monteagudo Alcorisa", role: "Estructuras", department: "Structures & Design", image: "/imagenes/team/Andrés_Monteagudo_Alcorisa.png" },
  {name: "Mireia Malondra Linares", role: "Estructuras", department: "Structures & Design", image: "/imagenes/team/Mireia_Malondra_Linares.png" },
  {name: "Pau	De Miguel Pérez", role: "Estructuras", department: "Image & Engagement", image: "/imagenes/team/Pau_De_Miguel_Pérez.png" },
  { name: "Ethan Montes Benavent", role: "Desarrollador", department: "Social Media", image: "/imagenes/team/Ethan_Montes_Benavent.png" },
  {name: "Irene Moya Gómez", role: "Desarrollador", department: "Social Media", image: "/imagenes/team/Irene_Moya_Gómez.png" },
  { name: "Víctor Martín Kruglova", role: "Administrative", department: "Administrative", image: "/imagenes/team/Víctor_Martín_Kruglova.png" },
  { name: "Marco Nieto Pérez", role: "Administrative", department: "Administrative", image: "/imagenes/team/Marco_Nieto_Pérez.png" },
  { name: "Lucas Tarragó Mahiques", role: "Administrative", department: "Administrative", image: "/imagenes/team/Lucas_Tarragó_Mahiques.png" },
];

export const Coordinadores = [
  { name: "Mateo Gajić Sales", role: "Coordinador", department: "Marketing", image: "/imagenes/team/Mateo_Gajić_Sales.png" },
  {name:"Victor Martín Kruglova", role: "Coordinador", department: "Operations", image: "/imagenes/team/Víctor_Martín_Kruglova.png" },
{name:"Marc Sanchis Llinares", role: "Coordinador", department: "Tech", image: "/imagenes/team/Marc_Sanchis_Llinares.png" },
]
