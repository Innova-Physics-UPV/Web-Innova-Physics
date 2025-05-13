import { Department } from "@/types";
//Estructura del departamento
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
//Miembros de los departamentos
export const teamMembers = [
  { name: "Andrés Monteagudo Alcorisa", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155902/Andr%C3%A9s_Monteagudo_elw9dc.png" },
  { name: "Debinamaca Ainoo Pérez", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155897/Debinamaca_Ainoo_P%C3%A9rez_edg76j.png" },
  { name: "Ethan Montes Benavent", role: "Desarrollador", department: "Social Media", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Ethan_Montes_Benavent.png" },
  { name: "Irene Moya Gómez", role: "Desarrollador", department: "Social Media", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Irene_Moya_G%C3%B3mez.png" },
  { name: "Juan Manuel Flores de la Cruz", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153008/Juan_Manuel_Flores_de_la_Cruz_qjtbly.jpg" },
  { name: "Laura Gil Bosch", role: "Estructuras & Mecanismos", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153010/Laura_Gil_Bosch_slaltj.png" },
  { name: "Lucas Tarragó Mahiques", role: "Administrative", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153009/Lucas_Tarrag%C3%B3_Mahiques_ytnzof.png" },
  { name: "Marc Sanchis Llinares", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Marc_Sanchis_Llinares.png" },
  { name: "Marco Nieto Pérez", role: "Administrative", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153011/Marco_Nieto_P%C3%A9rez_x9bf6j.png" },
  { name: "Mari Carmen Rea Rejia", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153014/Mari_Carmen_Rea_Rejia_wn0hwt.png" },
  { name: "María Morón Romero", role: "Físico", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Mar%C3%ADa_Mor%C3%B3n_Romero.png" },
  { name: "Marta Molés Herrero", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153014/Marta_Mol%C3%A9s_Herrero_bbeqel.png" },
  { name: "Mateo Gajić Sales", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153016/Mateo_Gaji%C4%87_Sales_ykf4ij.png" },
  { name: "Mireia Malondra Linares", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Mireia_Malondra_Linares.png" },
  { name: "Paula Almeida Guijarro", role: "Diseño", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Paula_Almeida_Guijarro.png" },
  { name: "Pau De Miguel Pérez", role: "Estructuras", department: "Image & Engagement", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Pau_De_Miguel_P%C3%A9rez.png" },
  { name: "Pau Anyó Calabuig", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Pau_Any%C3%B3_Calabuig.png" },
  { name: "Víctor Martín Kruglova", role: "Administrative", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153017/V%C3%ADctor_Mart%C3%ADn_Kruglova_ldegks.png" },
];

export const Coordinadores = [
  { name: "Marc Sanchis Llinares", role: "Coordinador", department: "Tech", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/Marc_Sanchis_Llinares.png" },
  { name: "Mateo Gajić Sales", role: "Coordinador", department: "Marketing", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153016/Mateo_Gaji%C4%87_Sales_ykf4ij.png" },
  { name: "Victor Martín Kruglova", role: "Coordinador", department: "Operations", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747153017/V%C3%ADctor_Mart%C3%ADn_Kruglova_ldegks.png" },
];

