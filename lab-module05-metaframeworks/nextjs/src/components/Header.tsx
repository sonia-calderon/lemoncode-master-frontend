import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-center py-2">
      <Link href="/" className="flex items-center">
        <Image
          src="/house-round-svgrepo-com.svg"
          alt="Rural House Logo"
          width={40}
          height={40}
        />
        <p className="font-display text-primary font-bold text-4xl">Rurall</p>
      </Link>
    </header>
  );
};

export default Header;
