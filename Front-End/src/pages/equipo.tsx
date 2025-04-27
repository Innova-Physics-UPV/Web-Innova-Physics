import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import DepartmentCircles from '@/components/sections/DepartmentCircles';
import { teamMembers, subDeptStructure ,Coordinadores} from '@/data/departmentData';
import {SubDepartment, Department, ExpandedDepts, SidebarProps} from '@/types';
import BaseSection from '@/components/common/BaseSection';

//La estructura de Departamentos y los miembros del equipo se deben modificar desde data.
//Los menus circulares deben ser modificados desde components/sections/DepartmentCircles.tsx, se recomienda revisarlos si se modifican la estructura.


// Aplanamos la estructura para obtener todos los subdepartamentos
const allSubDepartments = subDeptStructure.flatMap(dept => dept.subDepartments);

export default function Equipo() {
  const [showSidebar, setShowSidebar] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    containerRef.current = document.documentElement;
  }, []);

  const [expandedDepts, setExpandedDepts] = useState<ExpandedDepts>({
    "Tech": false,
    "Operations": false,
    "Marketing": false
  });

  // Función para manejar la expansión/colapso de departamentos individuales, se le pasa a DepartmentCircles para que maneje el estado
  const toggleDepartment = (deptName: string): void => {
    setExpandedDepts(prev => {
      // Crea un nuevo objeto con todos los departamentos cerrados
      const allClosed = Object.keys(prev).reduce((acc, dept) => {
        acc[dept] = false;
        return acc;
      }, {} as ExpandedDepts);

      // Alterna solo el departamento clicado
      return {
        ...allClosed,
        [deptName]: !prev[deptName]
      };
    });
  };
//Función para controlar la aparición del sidebar
  scrollYProgress.on("change", (current) => {
    const newShowSidebar = current > 0.1;
    setShowSidebar(newShowSidebar);
  });
//Función para hacer scroll a la sedcción del departamento
  const scrollToSection = (name: string) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Equipo - Innova</title>
        <meta name="description" content="Conoce al equipo de Innova Physics" />
      </Head>

      <main className="relative flex flex-col min-h-screen p-8">
        {/* Sidebar animado */}
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              className="fixed left-4 top-20 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col space-y-2 bg-background bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className='text-button'>
                  <button onClick={() => scrollToSection("DEPARTAMENTOS")}>
                    <span style={{ fontSize: "1em", fontWeight: "bold" }}>DEPARTAMENTOS</span>
                  </button>
                </div>

                {/* Lista de departamentos */}
                {subDeptStructure.map((dept) => (
                  <div key={dept.name} className="border-b border-gray-200 text-button pb-1 last:border-b-0 last:pb-0">
                    {/* Cabecera del departamento (expandible) */}
                    <button
                      className=" w-full flex justify-between items-center font-medium  py-1"
                      onClick={() => toggleDepartment(dept.name)}
                    >
                      <span>{dept.name}</span>
                      {expandedDepts[dept.name] ? '^' : '-'}
                    </button>

                    {/* Subdepartamentos (mostrados al expandir) */}
                    <AnimatePresence>
                      {expandedDepts[dept.name] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          <div className="flex text-button flex-col space-y-2 pt-1">
                            {dept.subDepartments.map((subDept) => (
                              <button
                                key={subDept.name}
                                className="flex items-center"
                                onClick={() => scrollToSection(subDept.name)}
                              >
                                {subDept.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenedor principal */}
        <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto mt-20">
          <section id="DEPARTAMENTOS" className='py-20'>
            <h1 className="text-3xl font-bold text-center mb-12">NUESTROS MIEMBROS</h1>
          </section>

          {/* Círculos de Departamentos */}
          
            <DepartmentCircles scrollToSection={scrollToSection}/>
        

          {/* Secciones de cada subdepartamento */}
          <div className="p-10">
            <BaseSection  title="Coordinadores"  key="Coordinadores" id="Coordinadores">       
            <section key="Coordinadores" className="w-full max-w-5xl my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
            {Coordinadores
                    .map(({ name, role,department, image }, index) => (
                      <div
                        key={`${name || role}-${index}`}
                        className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                      >
                        <div className="w-32 h-32 flex justify-center transition-all duration-300 ease-in-out hover:scale-110">
                        <img
                            src={image}
                            alt={name || role}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => e.target.src = "/imagenes/team/avatar.webp"} // Cambia a la imagen por defecto si ocurre un error
                          />
                        </div>
                        <h3>{name || "Sin asignar"}</h3>
                        <p className="text-sm opacity-80">{role}  <br />{department}</p>

                      </div>
                    ))}

            </div>
            </section>
            </BaseSection>
        
            {allSubDepartments.map((subDept) => {
  // Filtrar los miembros del subdepartamento
  const membersInDept = teamMembers.filter(member => member.department === subDept.name);

  // Solo renderizar la sección si hay miembros en el subdepartamento
  if (membersInDept.length === 0) {
    return null; // No renderiza nada si no hay miembros
  }

  return (
    <BaseSection title={subDept.name} key={subDept.name} id={subDept.name}>       
      <section key={subDept.name} className="w-full max-w-5xl my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {membersInDept.map(({ name, role, image }, index) => (
            <div
              key={`${name || role}-${index}`}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-32 h-32 flex justify-center transition-all duration-300 ease-in-out hover:scale-110">
                <img
                  src={image}
                  alt={name || role}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => e.target.src = "/imagenes/team/avatar.webp"} // Cambia a la imagen por defecto si ocurre un error
                />
              </div>
              <h3>{name || "Sin asignar"}</h3>
              <p className="text-sm opacity-80">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </BaseSection>
  );
})}
          </div>
        </div>
      </main>
    </>
  );
}
