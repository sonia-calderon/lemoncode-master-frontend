import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rurall - Refugios Rurales',
};

const RootPage = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[url(/javier-rincon-lSwy-mj3h4M-unsplash.jpg)] bg-cover bg-center px-6 py-12 text-center sm:min-h-[calc(100vh-10rem)] lg:px-12">
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 flex max-w-2xl flex-col items-center justify-center gap-5 text-secondary">
        <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
          Tu refugio rural te espera
        </h2>
        <p className="max-w-xl text-sm leading-relaxed sm:text-base md:text-lg">
          Desconecta de la rutina y reconecta con la naturaleza en nuestros
          alojamientos cuidadosamente seleccionados.
        </p>

        <div className="rounded-2xl bg-tertiary transition hover:bg-tertiary/70">
          <Link
            href="/houses"
            className="block px-6 py-3 font-medium text-secondary"
          >
            Explorar casas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RootPage;
