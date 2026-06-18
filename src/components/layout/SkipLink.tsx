export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[9999] focus:rounded-full focus:bg-[#063767] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white focus:shadow-xl"
    >
      Saltar al contenido principal
    </a>
  );
}