const Footer = () => {
  return (
    <footer className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl justify-center pt-4">
        <p className="text-center text-xs text-neutral sm:text-sm">
          <span>&#10047; Coded by </span>
          <a
            href="https://github.com/sonia-calderon"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-tertiary transition-colors hover:text-tertiary/70 hover:underline"
          >
            Sonia Calderón
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
