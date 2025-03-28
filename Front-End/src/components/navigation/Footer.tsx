import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de contacto */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p className="text-sm">
              Email: <a href="mailto:contacto@ejemplo.com" className="underline">contacto@ejemplo.com</a>
            </p>
            <p className="text-sm">Teléfono: +123 456 7890</p>
          </div>

          {/* Enlaces rápidos */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Enlaces rápidos</h3>
            <ul className="text-sm">
              <li>
                <a href="#about" className="underline hover:text-gray-400">Acerca de</a>
              </li>
              <li>
                <a href="#services" className="underline hover:text-gray-400">Servicios</a>
              </li>
              <li>
                <a href="#privacy" className="underline hover:text-gray-400">Política de Privacidad</a>
              </li>
            </ul>
          </div>

          {/* Derechos de autor */}
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {new Date().getFullYear()} Mi Página. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
