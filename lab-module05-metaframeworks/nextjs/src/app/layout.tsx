import { Inter, Playfair_Display } from 'next/font/google';
import 'normalize.css';
import './globals.css';
import { Metadata } from 'next';
import React from 'react';
import Header from '#components/header.component';
import Footer from '#components/footer.component';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rurall - Casas Rurales',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = (props: Props) => {
  const { children } = props;
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-secondary flex flex-col min-h-screen`}
      >
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
