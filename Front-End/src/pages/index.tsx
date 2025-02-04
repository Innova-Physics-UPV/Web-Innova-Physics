import Head from 'next/head';
import TeamSection from '@/components/sections/TeamSection';
import SponsorSection from '@/components/sections/SponsorSection';
import AboutUsSection from '@/components/sections/AboutUsSection';

const TestComponent = () => (
  <div className="relative z-10 border-4 border-green-500 bg-yellow-100 p-4">
    <h2>Test Component</h2>
    <p>This is a test component to check rendering.</p>
  </div>
);

export default function Home() {
  console.log("Home component mounted");
  return (
    <>
      <Head>
        <title>Innova</title>
        <meta name="description" content="Innova Physics web" />
      </Head>
      <main className="relative z-10 space-y-10"> {/* Added space-y-10 for spacing between sections and p-4 for padding */}
        <div className="relative h-screen w-full" id = "logotipo">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-60 z-20">
            <img
              src="logos/logotipo_WHITE.svg"
              alt="Logotipo"
              className="w-auto h-auto filter"
            />
          </div>
        </div>
        
          <AboutUsSection />
          <TeamSection />
          <SponsorSection />
        
      </main>
    </>
  );
}