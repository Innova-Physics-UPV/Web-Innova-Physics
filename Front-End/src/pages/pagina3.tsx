import Head from 'next/head';
export default function Home() {
  return (  
<>
      <Head>
        <title>Página 3</title>
        <meta name="description" content="Bienvenido a mi sitio web" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-secundario-400">en construcción</h1>
        <p className="mt-4 text-lg text-neutral-100">
          Esta es la página 3 de Innova physics.
        </p>
      </main>
    </>

  );
}