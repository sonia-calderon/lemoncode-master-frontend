import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alquilar Casas Rurales',
};

const RootPage = () => {
  return (
    <>
      <h2 className="flex font-display">Hello from Homepage</h2>
      <Link href="/houses">Navigate to house list</Link>
    </>
  );
};

export default RootPage;
