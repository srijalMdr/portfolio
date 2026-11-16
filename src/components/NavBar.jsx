import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  // { id: "contact", label: "Contact" },
];

function NavBar({ menuOpen, setMenuOpen }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Highlight the link for whichever section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#fffbf5]/90 backdrop-blur-lg">
      <div className="px-6 md:px-16">
        <div className="flex items-center justify-between h-[75px]">
          <a
            href="#home"
            className="font-[Oswald] text-2xl font-bold uppercase tracking-tight text-[#14160d]"
          >
            Srijal<sup className="text-xs align-super">®</sup>
          </a>

          <div className="hidden md:flex self-stretch items-stretch gap-2 font-[Space_Mono] text-xs uppercase tracking-[0.15em]">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group relative flex items-center px-2"
              >
                <span
                  className={`px-4 py-1.5 rounded-full border-2 transition-colors ${
                    active === id
                      ? " border-[#14160d] text-[#14160d] font-bold"
                      : "border-transparent text-[#606060] group-hover:text-[#0a013b]"
                  }`}
                >
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-0 h-1 bg-[#7350ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#0a013b] font-[Space_Mono] text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#1f1270] transition-colors duration-500 ease-out group"
          >
            Say Hello{" "}
            <span aria-hidden="true" className="transition-transform duration-500 ease-out group-hover:translate-x-2">
              ⟶
            </span>
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="text-2xl text-[#14160d] cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
