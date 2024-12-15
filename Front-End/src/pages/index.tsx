import Head from 'next/head';
import VideoBackground from '../components/VideoBackground';
import TeamSection from '@/components/TeamSection';
import SponsorSection from '@/components/SponsorSection';
import AnimatedCurves from '@/components/AnimatedCurves';
import Gallery from '@/components/Gallery';
import { Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (  
<>
      <Head>
        <title>Página Principal</title>
        <meta name="description" content="Bienvenido a mi sitio web" />
      </Head>
      <main>
      <div className="relative h-screen w-full"> 
  <div className="relative h-full w-full " id="AnimatedCurves">
    <AnimatedCurves />
  </div>



  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-60 z-20 ">
    <img
      src="logos/logotipo_WHITE.svg"
      alt="Logotipo"
      className="w-auto h-auto filter " 
    />
  </div>

</div>

<section className="relative  mx-auto p-10 bg-background">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section with Text */}
        <div className="flex-1">
          <h2>¿QUIENES SOMOS?</h2>
          <p className='text-justify'>
          Innova physics UPV es un grupo multidisciplinar de estudiantes interesados en las áreas de la física, ingeniería y tecnología. Nuestra misión es diseñar y construir una fuente de neutrones para aplicarla a la terapia y diagnóstico del cáncer de una manera revolucionaria y efectiva. Trabajamos bajo el programa Generación Espontánea, el cual está apoyado y financiado por la Universidad Politécnica de Valencia. Creemos en la excelencia y en la dedicación, gracias a las cuales día tras día avanzamos para construir un futuro mejor.
          </p>
        </div>
        {/* Right Section with Gallery */}
        <div className="flex-1">
          <Gallery/>
        </div>
      </div>
</section>

<div className="relative">
<TeamSection /></div>
<SponsorSection />
      </main>
    </>

  );
}
