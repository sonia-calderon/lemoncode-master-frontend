import { Hero } from '#components/hero.component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rurall - Refugios Rurales',
};

const RootPage = () => {
  return <Hero />;
};

export default RootPage;
