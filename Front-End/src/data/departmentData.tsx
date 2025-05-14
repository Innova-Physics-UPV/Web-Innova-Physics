import { Department } from "@/types";
//Estructura del departamento
export const subDeptStructure: Department[] = [
  {
    name: "Tech",
    image: "/logos/departamentos/Tech.png",
    subDepartments: [
      { name: "Software", image: "/logos/departamentos/Software.png" },
      { name: "Hardware", image: "/logos/departamentos/Hardware.png" },
      { name: "Applied Physics", image: "/logos/departamentos/AppliedPhysics.png" },
      { name: "Structures & Design", image: "/logos/departamentos/Structures&Design.png" },
    ],
  },
  {
    name: "Operations",
    image: "/logos/departamentos/Operaciones.png",
   
    subDepartments: [
     { name: "Economics", image: "/logos/departamentos/Economics.png" },
      { name: "Administrative", image: "/logos/departamentos/Administrative.png" },
    ],
  },
  {
    name: "Marketing",
    image: "/logos/departamentos/Marketing.png",
    subDepartments: [
      { name: "Image & Engagement", image: "/logos/departamentos/Imagen&Engagement.png" },
     { name: "Relationships & Partners", image: "/logos/departamentos/Relationships&Partners.png" },
      { name: "Social Media", image: "/logos/departamentos/SocialMedia.png"},
    ],
  },
];
//Miembros de los departamentos
export const teamMembers = [
  { name: "Ana Maset Sola", role: "Estructuras", department: "Structures & Design" },
  { name: "Andrés Monteagudo Alcorisa", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155902/Andr%C3%A9s_Monteagudo_elw9dc.png" },
  { name: "Carlos Mauri García", role: "Relaciones", department: "Relationships & Partners" },
  { name: "Debinamaca Ainoo Pérez", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155897/Debinamaca_Ainoo_P%C3%A9rez_edg76j.png" },
  { name: "Ethan Montes Benavent", role: "Desarrollador", department: "Social Media" },
  { name: "Irene Moya Gómez", role: "Desarrollador", department: "Social Media" },
  { name: "Juan Manuel Flores de la Cruz", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155899/Juan_Manuel_Flores_de_la_Cruz_qdigeq.jpg" },
  { name: "Juan Manuel Prior Sánchez", role: "Relaciones", department: "Relationships & Partners", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262331/Juan_Manuel_Prior_S%C3%A1nchez_kkffyk.jpg" },
  { name: "Laura Gil Bosch", role: "Estructuras & Mecanismos", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155894/Laura_Gil_Bosch_aczzze.png" },
  { name: "Lucas Tarragó Mahiques", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155890/Lucas_Tarrag%C3%B3_Mahiques_rh2yws.png" },
  { name: "Marc Sanchis Llinares", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262038/Marc_Sanchis_Llinares_rceyzb.png" },
  { name: "Marco Nieto Pérez", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155885/Marco_Nieto_P%C3%A9rez_rk9kxr.png" },
  { name: "Mari Carmen Rea Rejia", role: "Software", department: "Software", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155881/Mari_Carmen_Rea_Rejia_vvqq8v.png" },
  { name: "María Morón Romero", role: "Físico", department: "Applied Physics" },
  { name: "Marta Molés Herrero", role: "Estructuras", department: "Structures & Design", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155872/Marta_Mol%C3%A9s_Herrero_sp1ryy.png" },
  { name: "Mateo Gajić Sales", role: "Dirección", department: "Applied Physics", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155879/Mateo_Gaji%C4%87_Sales_yiw7jt.png" },
  { name: "Mireia Malondra Linares", role: "Estructuras", department: "Structures & Design" },
  { name: "Núria Vanyó Santonja", role: "Software", department: "Software" },
  { name: "Paula Almeida Guijarro", role: "Diseño", department: "Applied Physics" },
  { name: "Pau Anyó Calabuig", role: "Hardware", department: "Hardware", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155874/Pau_Any%C3%B3_Calabuig_zq4pow.jpg" },
  { name: "Pau De Miguel Pérez", role: "Imagen", department: "Image & Engagement", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155866/Pau_De_Miguel_P%C3%A9rez_tj5mal.jpg" },
  { name: "Valentina Inmaculada García Manrique", role: "Imagen", department: "Image & Engagement" },
  { name: "Víctor Martín Kruglova", role: "Gestión", department: "Administrative", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155887/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.png" }
];


export const Coordinadores = [
  { name: "Marc Sanchis Llinares", role: "Coordinador", department: "Tech", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747262038/Marc_Sanchis_Llinares_rceyzb.png" },
  { name: "Mateo Gajić Sales", role: "Coordinador", department: "Marketing", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155879/Mateo_Gaji%C4%87_Sales_yiw7jt.png" },
  { name: "Victor Martín Kruglova", role: "Coordinador", department: "Operations", image: "https://res.cloudinary.com/dpdcyfjnv/image/upload/v1747155887/V%C3%ADctor_Mart%C3%ADn_Kruglova_vhjx3z.png" },
];