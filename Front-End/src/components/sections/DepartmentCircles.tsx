import { useState } from 'react';
import { Department } from '@/types';
import { subDeptStructure } from '@/data/departmentData';
const departments = subDeptStructure;

export default function DepartmentCircles({ scrollToSection }: { scrollToSection: (name: string) => void }) {
  const [openDept, setOpenDept] = useState<string | null>(null);
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);
  const [hoveredSubDeptIndices, setHoveredSubDeptIndices] = useState<Record<string, number | null>>({});
  
  // Función para manejar la apertura/cierre de los departamentos
  const handleToggle = (deptName: string) => {
    setOpenDept(prev => (prev === deptName ? null : deptName));
  };
  
  // Función para manejar el hover de subdepartamentos
  const handleSubDeptHover = (deptName: string, index: number | null) => {
    setHoveredSubDeptIndices(prev => ({
      ...prev,
      [deptName]: index
    }));
  };
  
  // Función para renderizar cada círculo de departamento
  const renderDepartmentCircle = (department: Department) => {
    const isOpen = openDept === department.name;
    const isHovered = hoveredDept === department.name;
    const hoveredSubDeptIndex = hoveredSubDeptIndices[department.name] ?? null;
    
    // Determinamos qué imagen usar para el departamento principal
    const departmentImageSrc = isHovered && department.hoverImage 
      ? department.hoverImage 
      : department.image;
    
    return (
      <div key={department.name} className="relative flex flex-col items-center">
        <div className="relative flex justify-center">
          {/* Botón principal del departamento */}
          <button
            onClick={() => handleToggle(department.name)}
            onMouseEnter={() => setHoveredDept(department.name)}
            onMouseLeave={() => setHoveredDept(null)}
            className={`w-[12vw] h-[12vw] bg-foreground rounded-full shadow-lg flex flex-col items-center justify-center z-20 transition-all duration-300 ${isOpen ? 'scale-110' : ''}`}
          >
            <div className="mb-3">
              <img
                src={departmentImageSrc}
                alt={department.name}
                className="w-[clamp(24px,10vw,120px)] h-[clamp(24px,10vw,120px)] object-contain dark:invert "
              />
            </div>
          </button>
          
          {/* Menú circular de subdepartamentos */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {department.subDepartments.map((subDept, index) => {
              const totalItems = department.subDepartments.length;
              const angle = (index * (2 * Math.PI / totalItems)) + (department.name === "Tech" ? Math.PI / 4 : 0);
              const radius = '14vw';
              const x = isOpen ? `calc(${Math.cos(angle)} * ${radius})` : "0";
              const y = isOpen ? `calc(${Math.sin(angle)} * ${radius})` : "0";
              const isSubDeptHovered = hoveredSubDeptIndex === index;
              
              // Determinamos qué imagen usar para el subdepartamento
              const subDeptImageSrc = isSubDeptHovered && subDept.hoverImage 
                ? subDept.hoverImage 
                : subDept.image;
              
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center transition-all duration-300"
                  style={{
                    transform: `translate(${x}, ${y})`,
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {/* Botón de subdepartamento */}
                  <button
  onClick={() => handleToggle(department.name)}
  //onMouseEnter={() => setHoveredDept(department.name)}
  //onMouseLeave={() => setHoveredDept(null)}
  className={`w-[12vw] h-[12vw] bg-foreground rounded-full shadow-lg flex flex-col items-center justify-center z-20 transition-all duration-300 overflow-hidden relative ${isOpen ? 'scale-110' : ''}`}
>
  {/* Gradiente al hacer hover */}
  <div
    className={`absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-0'}`}
  ></div>

  <div className="mb-3 relative z-10">
    <img
      src={departmentImageSrc}
      alt={department.name}
      className="w-[clamp(24px,10vw,120px)] h-[clamp(24px,10vw,120px)] object-contain"
    />
  </div>
</button>

                  <p className="text-foreground text-xs mt-2">{subDept.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <p className="font-semibold mt-2">{department.name}</p>
      </div>
    );
  };
  
  return (
    <div className="grid grid-cols-3 gap-12 w-full max-w-screen-xl mx-auto py-15">
      {departments.map((department) => renderDepartmentCircle(department))}
    </div>
  );
}