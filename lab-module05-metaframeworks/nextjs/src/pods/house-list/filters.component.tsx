'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export const Filters: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/houses?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mx-auto w-full max-w-2xl items-center gap-2"
      >
        <div className="relative flex-1">
          <label htmlFor="search" className="sr-only">
            Buscar casas
          </label>
        </div>

        <div className="pointer-events-none absolute pl-5 text-neutral">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <input
          type="text"
          id="search"
          placeholder="Buscar nombre o ubicación"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-neutral/20
            bg-white/70 py-3 pl-11 pr-4
            text-sm text-primary
            shadow-sm
            outline-none
            transition-all duration-200
            focus:ring-2
            focus:ring-primary/10
            sm:text-base"
        />

        <button
          type="submit"
          className="
          shrink-0 rounded-xl
          bg-primary px-5 py-3
          text-sm font-medium text-secondary
          shadow-sm
          transition-all duration-200
          hover:bg-primary/90
          hover:shadow-md
          active:scale-[0.98]
          sm:px-6 sm:text-base
        "
        >
          Buscar
        </button>
      </form>
    </>
  );
};
