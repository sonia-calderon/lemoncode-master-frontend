import Link from 'next/link';

export const BackNav = () => {
  return (
    <div>
      <Link
        href="/houses"
        className="group inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-neutral transition-colors hover:bg-primary/5 hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <span>Volver al listado</span>
      </Link>
    </div>
  );
};
