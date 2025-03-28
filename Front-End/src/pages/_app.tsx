import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Headerpp";

const NeonDrawingEffect = dynamic(
  () => import("@/components/animations/bgSetup"),
  { ssr: false }
);
function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-0">
        <NeonDrawingEffect />
      </div>
      <Header />
      <main className="flex-grow relative">
        <Component {...pageProps} />
      </main>
      <div className="relative bottom-0 left-0 z-10 pt-40">
      <Footer/>
      </div>
    </div>
  );
}

export default App;