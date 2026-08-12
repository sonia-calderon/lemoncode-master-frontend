import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alquilar Casas Rurales',
};

const RootPage = () => {
  return (
    <section className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[url(/javier-rincon-lSwy-mj3h4M-unsplash.jpg)] bg-cover bg-center px-6 text-center">
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 max-w-2xl text-secondary flex flex-col gap-4 items-center justify-center">
        <h2 className="font-display text-4xl md:text-5xl">
          Tu refugio rural te espera
        </h2>
        <p className="md:text-lg">
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
