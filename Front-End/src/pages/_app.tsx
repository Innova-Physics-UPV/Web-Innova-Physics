import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from 'next/link';
import { ParallaxProvider } from "react-scroll-parallax";
import Header from '@/components/Header';

function App({ Component, pageProps }: AppProps) {
  /* Menú global */
  return (<>

  
  
<header className="fixed top-0 left-0 w-full z-50 p-5">
  <nav className="flex justify-between items-center w-full p-4 bg-transparent">
    <Link href="/">
      <img
        src="logos/isotipo_BLACK.svg"
        alt="Site Logo"
        className="w-12 h-12 invert object-contain transition-opacity duration-300 ease-in-out"
      />
    </Link>
    <ul className="flex space-x-4">
      <li>
        <Link 
          href="/" 
          className="text-background dark:text-white hover:opacity-70 transition"
        >
          Inicio
        </Link>
      </li>
      <li>
        <Link 
          href="/equipo" 
          className="text-background dark:text-white hover:opacity-70 transition"
        >
          Team
        </Link>
      </li>
      <li>
        <Link 
          href="/sponsors" 
          className="text-background dark:text-white hover:opacity-70 transition"
        >
         Patrocinadores
        </Link>
      </li>
    </ul>
  </nav>
</header>


  <ParallaxProvider> 
  <Component {...pageProps} />
 </ParallaxProvider>
  </>
);
  


}
export default App;