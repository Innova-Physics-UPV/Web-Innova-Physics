import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Header() {
  const [isImageVisible, setIsImageVisible] = useState(false);  // Start with false as default

  useEffect(() => {
    const targetImage = document.querySelector('#AnimatedCurves');
    
    if (!targetImage) {
      setIsImageVisible(false);
      return;  // Exit early if no image found
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(targetImage);

    return () => observer.disconnect();
  }, []);  // Empty dependency array means this only runs on mount

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-3 transition-all duration-300 ${
        !isImageVisible ? "bg-white shadow-md shadow-gray-500/60 dark:bg-gray-800 dark:shadow-none" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full p-4">
        <Link href="/">
          <div
            className={`flex items-center text-lg font-bold cursor-pointer ${
              !isImageVisible ? "text-black dark:text-white" : "text-white"
            }`}
          >
            <img
              src={`${
                !isImageVisible ? "logos/isotipo_BLACK.svg" : "logos/isotipo_WHITE.svg"
              }`}
              alt="Site Logo"
              className="w-12 h-12 object-contain transition-opacity duration-300 ease-in-out"
            />
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              aria-current="page"
              className={`text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-300`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/pagina2"
              className={`text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-300`}
            >
              Página2
            </Link>
          </li>
          <li>
            <Link
              href="/pagina3"
              className={`text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-300`}
            >
              Página3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}