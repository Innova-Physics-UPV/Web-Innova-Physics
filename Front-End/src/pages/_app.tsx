import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from 'next/link';

function App({ Component, pageProps }: AppProps) {
  /* Menú global */
  return (<>
  
  <header className="bg-neutral-dark-900 text-secundario-200 p-5">
    <nav className="flex justify-between items-center">
      <Link href="\"><div className="text-lg font-bold"  > Icon </div></Link>
        <ul className="flex space-x-4">
          <li >  
              <Link href="\">Inicio</Link>
          </li>
          <li>  
              <Link href="\pagina2">Página2</Link>
          </li>
          <li>  
              <Link href="\pagina3">Página3</Link>
          </li>
        </ul>

      

    </nav>

  </header>
  
  <Component {...pageProps} />

  </>
);
  


}
export default App;