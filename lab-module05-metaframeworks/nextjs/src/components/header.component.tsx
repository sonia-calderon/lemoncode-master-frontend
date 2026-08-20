import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Rurall - Inicio"
        >
          <Image
            src="/house-round-svgrepo-com.svg"
            alt="Rural House Logo"
            width={40}
            height={40}
          />
          <span className="font-display text-3xl font-bold leading-none text-primary sm:text-4xl">
            Rurall
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
