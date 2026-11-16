import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "FullStack E-commerce",
    description:
      "Full-stack store with product browsing, cart and order workflows on a Node.js + PostgreSQL backend.",
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Drizzle"],
    link: "https://srijalecommerce.netlify.app/",
  },
  {
    title: "Fast React Pizza Co",
    description:
      "Pizza ordering app with dynamic routing and global state for smooth browsing and checkout.",
    tech: ["React", "React Router", "Redux", "Tailwind"],
    link: "https://srijalfastreactpizza.netlify.app/",
  },
  {
    title: "Battle Pokemon",
    description:
      "Pokémon battle app with type-based search, real-time battles and battle history tracking.",
    tech: ["React", "React Router", "React Query", "Tailwind"],
    link: "https://srijalpokemon.netlify.app/",
  },
  {
    title: "The Wild Oasis",
    description:
      "Hotel management app for bookings, check-ins, cabins and real-time sales reports.",
    tech: ["React", "React Query", "Styled Components", "Supabase"],
    link: "https://srijalwildoasis.netlify.app",
  },
  {
    title: "World Wise",
    description:
      "Interactive map to record, explore and visualize the places you've traveled.",
    tech: ["React", "Context API"],
    link: "https://srijalworldwise.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Search any city and explore detailed hourly forecasts for the coming days.",
    tech: ["React", "React Query", "Tailwind"],
    link: "https://srijalweather.netlify.app/",
  },
  {
    title: "Mapty",
    description:
      "Log running and cycling workouts on a map, with persistent markers for past activities.",
    tech: ["JavaScript", "Leaflet"],
    link: "https://srijalmapty.netlify.app/",
  },
];

const cardColors = ["bg-[#d1e030]", "bg-[#9eef80]", "bg-[#fbd535]"];

function Projects() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const pad = parseFloat(getComputedStyle(track).paddingLeft);
      // At the far right end, the last cards can't reach the left edge.
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
        setActive(track.children.length - 1);
        return;
      }
      let closest = 0;
      let best = Infinity;
      Array.from(track.children).forEach((card, i) => {
        const d = Math.abs(card.offsetLeft - pad - track.scrollLeft);
        if (d < best) {
          best = d;
          closest = i;
        }
      });
      setActive(closest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i) => {
    const track = trackRef.current;
    const card = track?.children[i];
    if (card) {
      const pad = parseFloat(getComputedStyle(track).paddingLeft);
      track.scrollTo({
        left: card.offsetLeft - pad,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="min-h-[80vh] flex flex-col justify-center py-16 bg-[#fcf4e9]"
    >
      <RevealOnScroll>
        {/* Header */}
        <div className="px-6 md:px-16">
          <div className="flex items-end justify-between gap-4 pb-6 border-b-2 border-dashed border-[#c9dc8a]">
            <div className="flex items-end gap-6">
              <span className="font-[Space_Mono] text-xs font-bold text-[#14160d] mb-2">
                (03)
              </span>
              <h2 className="font-[Oswald] font-bold uppercase leading-none text-[#14160d] text-5xl md:text-7xl">
                Projects{" "}
              </h2>
            </div>
            <span className="hidden sm:block font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#726f66] mb-2">
              // Scroll sideways →
            </span>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={trackRef}
          className="relative mt-12 flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-16 px-6 md:px-16 pt-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group snap-start shrink-0 w-[85vw] sm:w-[480px] lg:w-[540px] min-h-[480px] flex flex-col p-9 rounded-2xl border-2 border-[#14160d] text-[#14160d] transition-transform duration-500 ease-out hover:-translate-y-2 ${
                cardColors[i % cardColors.length]
              }`}
            >
              <span className="font-[Space_Mono] text-[11px] tracking-[0.15em]">
                №{String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-auto font-[Oswald] font-bold uppercase leading-[0.95] text-5xl md:text-6xl">
                {project.title}
              </h3>

              <p className="mt-10 mb-auto max-w-sm font-[Space_Mono] text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-10 pt-5 border-t-2 border-dashed border-[#14160d] flex items-center justify-between gap-4 font-[Space_Mono] text-[11px] font-bold uppercase tracking-[0.15em]">
                <span>{project.tech.join(" · ")}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-base transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="px-6 md:px-16 mt-4 flex gap-2.5">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full border-2 border-[#14160d] cursor-pointer transition-colors ${
                active === i ? "bg-[#14160d]" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export { Projects };
