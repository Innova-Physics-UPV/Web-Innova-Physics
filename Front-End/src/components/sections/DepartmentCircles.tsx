import { useState } from 'react';
import { Department } from '@/types';
import { subDeptStructure } from '@/data/departmentData';
const departments = subDeptStructure;

export default function DepartmentCircles({ scrollToSection }: { scrollToSection: (name: string) => void }) {
  const [openDept, setOpenDept] = useState<string | null>(null);
  const [hoveredSubDeptIndices, setHoveredSubDeptIndices] = useState<Record<string, number | null>>({});

  const handleToggle = (deptName: string) => {
    setOpenDept(prev => (prev === deptName ? null : deptName));
  };

  const handleSubDeptHover = (deptName: string, index: number | null) => {
    setHoveredSubDeptIndices(prev => ({
      ...prev,
      [deptName]: index
    }));
  };

  const renderDepartmentCircle = (department: Department) => {
    const isOpen = openDept === department.name;
    const hoveredIndex = hoveredSubDeptIndices[department.name] ?? null;

    return (
      <div
        key={department.name}
        className="relative flex flex-col items-center pt-10 group"
        onMouseEnter={() => handleToggle(department.name)}
        onMouseLeave={() => handleToggle('')}
      >
        <div className="relative flex justify-center">
          <button
            className={`w-[12vw] h-[12vw] rounded-full shadow-lg flex items-center justify-center z-20 transition-transform duration-300 ${isOpen ? 'scale-110' : ''} bg-background dark:bg-background group-hover:bg-gradient-to-r group-hover:from-primario-300 group-hover:to-secundario-300`}
          >
            <img
              src={department.image}
              alt={department.name}
              className="w-[clamp(24px,10vw,120px)] h-[clamp(24px,10vw,120px)] object-contain"
            />
          </button>

          <div className="absolute inset-0 flex items-center justify-center">
            {department.subDepartments.map((subDept, idx) => {
              const total = department.subDepartments.length;
              const angle = (idx * 2 * Math.PI) / total;
              const radius = '12vw';
              const x = isOpen ? `calc(${Math.cos(angle) * parseFloat(radius)}vw)` : '0';
              const y = isOpen ? `calc(${Math.sin(angle) * parseFloat(radius)}vw)` : '0';

              return (
                <div
                  key={subDept.name}
                  className="absolute flex flex-col items-center transition-all duration-300"
                  style={{
                    transform: `translate(${x}, ${y}) ${isOpen ? 'scale(1)' : 'scale(0)'}`,
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: `${idx * 50}ms`
                  }}
                  onMouseEnter={() => handleSubDeptHover(department.name, idx)}
                  onMouseLeave={() => handleSubDeptHover(department.name, null)}
                >
                  <button
                    className={`w-[6vw] h-[6vw] rounded-full shadow-lg flex items-center justify-center z-20 bg-background dark:bg-background transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-0'} hover:bg-gradient-to-r hover:from-primario-300 hover:to-secundario-300`}
                    onClick={() => scrollToSection(subDept.name)}
                  >
                    <img
                      src={subDept.image}
                      alt={subDept.name}
                      className="w-[clamp(16px,6vw,60px)] h-[clamp(16px,6vw,60px)] object-contain"
                    />
                  </button>
                  <p className="mt-2 text-xs text-white">{subDept.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-4 font-semibold text-white">{department.name}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-12 w-full max-w-screen-xl mx-auto">
      {departments.map(renderDepartmentCircle)}
    </div>
  );
}
