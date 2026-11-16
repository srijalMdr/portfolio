const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function MobileMenu({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 bg-[#fffbf5] flex flex-col px-6 transition-all duration-500 ease-out overflow-hidden ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between h-[75px] shrink-0">
        <a
          href="#home"
          onClick={close}
          className="font-[Oswald] text-2xl font-bold uppercase tracking-tight text-[#14160d]"
        >
          Srijal<sup className="text-xs align-super">®</sup>
        </a>
        <button
          type="button"
          onClick={close}
          aria-label="Close menu"
          className="text-4xl leading-none text-[#14160d] cursor-pointer"
        >
          &times;
        </button>
      </div>

      <span className="mt-6 font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#726f66]">
        // Menu
      </span>

      {/* Links */}
      <nav className="mt-4 border-t-2 border-dashed border-[#c9dc8a]">
        {links.map(({ id, label }, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={close}
            style={{ transitionDelay: menuOpen ? `${150 + i * 75}ms` : "0ms" }}
            className={`group flex items-center gap-6 py-5 border-b-2 border-dashed border-[#c9dc8a] transition-all duration-500 ease-out ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="font-[Oswald] font-bold text-2xl text-[#bdb8ae]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-[Oswald] font-bold uppercase text-5xl leading-none text-[#14160d] transition-colors group-hover:text-[#7350ff]">
              {label}
            </span>
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        onClick={close}
        className="group mt-10 self-start inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a013b] font-[Space_Mono] text-sm font-bold uppercase tracking-[0.15em] text-white"
      >
        Say Hello
        <span
          aria-hidden="true"
          className="transition-transform duration-500 ease-out group-hover:translate-x-2"
        >
          ⟶
        </span>
      </a>
    </div>
  );
}

export { MobileMenu };
