import { RevealOnScroll } from "../RevealOnScroll";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-end pt-[75px] pb-12 px-6 md:px-16"
    >
      <RevealOnScroll>
        <div className="w-full">
          {/* Meta row */}
          <div className="flex justify-between gap-4 font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#726f66]">
            <span>Srijal.dev — Fullstack</span>
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="mt-6 border-t-2 border-dashed border-[#c9dc8a]" />

          {/* Giant name */}
          <h1 className="mt-8 font-[Oswald] font-bold uppercase text-[#14160d] leading-[0.85] tracking-tight text-[clamp(4rem,17vw,15rem)]">
            <span className="block">Srijal</span>
            <span className="block text-right">Manandhar</span>
          </h1>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4 font-[Space_Mono] text-sm font-bold uppercase tracking-[0.15em] text-[#14160d]">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#14160d] bg-[#0a013b] transition-transform duration-500 ease-out hover:-translate-y-2 text-white group"
            >
              View Projects{" "}
              <span
                aria-hidden="true"
                className="transition-transform duration-500 ease-out group-hover:translate-x-1.75"
              >
                ⟶
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-[#14160d] transition-transform duration-500 ease-out hover:-translate-y-2"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export { Home };
