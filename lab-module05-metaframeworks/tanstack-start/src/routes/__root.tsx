import * as React from 'react';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import normalizeCss from 'normalize.css?url';
import globalsCss from './globals.css?url';
import Header from '#components/header.component.js';
import Footer from '#components/footer.component.js';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Rurall - Casas Rurales' },
    ],
    links: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: normalizeCss },
      { rel: 'stylesheet', href: globalsCss },
    ],
  }),
  shellComponent: RootComponent,
});

function RootComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body className={`font-sans bg-secondary flex flex-col min-h-screen`}>
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}
