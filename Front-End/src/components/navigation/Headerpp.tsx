import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        console.log("isVisible:", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const animatedCurvesElement = document.getElementById("logotipo");
    if (animatedCurvesElement) {
      observer.observe(animatedCurvesElement);
    }

    return () => {
      if (animatedCurvesElement) {
        observer.unobserve(animatedCurvesElement);
      }
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50
      transition-colors duration-300 ease-in-out
      ${!isVisible ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}
    `}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Image
              src="/logos/isotipo_WHITE.svg"
              alt="Site Logo"
              width={50}
              height={50}
              className="w-12 h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/equipo" className="text-white hover:text-gray-300 transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className="text-white hover:text-gray-300 transition-colors">
                Patrocinadores
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          fixed inset-0 bg-black/90 backdrop-blur-sm
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-center">
              <li>
                <Link 
                  href="/" 
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo" 
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/sponsors" 
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Patrocinadores
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;