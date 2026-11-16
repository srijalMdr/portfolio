import { RevealOnScroll } from "../RevealOnScroll";

const stack = [
  {
    title: "Frontend",
    skills: [
      "React",
      "NextJS",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "React Native",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
      "PostgreSQL",
      "DrizzleORM",
      "AWS",
    ],
  },
];

const education = [
  {
    title: "BSc.CSIT",
    place: "St. Xavier's College (TU)",
    years: "2022–2026",
    detail:
      "Relevant coursework: Web Development, Data Structures, Cloud Computing, Computer Networking…",
  },
  {
    title: "+2 Science",
    place: "Trinity Int'l College (NEB)",
    years: "2020–2022",
    detail: "GPA: 3.51",
  },
];

const hackathons = [
  {
    title: "Code Yatra Hackathon",
    place: "2nd Runner-Up",
    detail:
      "Farminsight — NFC-based livestock ID and profiling system for farmers to optimize yeild.",
  },
  {
    title: "SXC Sandbox 2.0",
    detail: "Aajivan — an AI medication assistant for elderly users.",
  },
];

function SectionHeader({ index, title, note, dark = false }) {
  return (
    <div
      className={`flex items-end justify-between gap-4 pb-6 border-b-2 border-dashed ${
        dark ? "border-[#4b3fa0]" : "border-[#c9dc8a]"
      }`}
    >
      <div className="flex items-end gap-6">
        <span
          className={`font-[Space_Mono] text-xs font-bold mb-2 ${
            dark ? "text-[#fffbf5]" : "text-[#14160d]"
          }`}
        >
          ({index})
        </span>
        <h2
          className={`font-[Oswald] font-bold uppercase leading-none text-5xl md:text-7xl ${
            dark ? "text-[#fffbf5]" : "text-[#14160d]"
          }`}
        >
          {title}
        </h2>
      </div>
      <span
        className={`hidden sm:block font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] mb-2 ${
          dark ? "text-[#a99fe0]" : "text-[#726f66]"
        }`}
      >
        // {note}
      </span>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="px-4 py-2 rounded-full border-2 border-[#14160d] font-[Space_Mono] text-[11px] font-bold uppercase tracking-[0.1em] text-[#14160d]  hover:-translate-y-2 transition-transform duration-300 ease-out ">
      {children}
    </span>
  );
}

function About() {
  return (
    <section id="about">
      <section className="min-h-[80vh] flex items-center bg-[#1f1270]">
        <div className="w-full px-6 md:px-16 py-16">
          <RevealOnScroll>
            <SectionHeader
              dark
              index="01"
              title="Background"
              note="Education & hackathons"
            />
            <div className="grid md:grid-cols-2 gap-x-16">
              {[
                { heading: "Education", items: education },
                { heading: "Hackathons", items: hackathons },
              ].map(({ heading, items }) => (
                <div key={heading}>
                  <h3 className="pt-10 font-[Oswald] font-bold uppercase text-3xl text-white">
                    {heading}
                  </h3>
                  {items.map((item, j) => (
                    <div
                      key={item.title}
                      className={`py-6 ${
                        j > 0 ? "border-t-2 border-dashed border-[#4b3fa0]" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-[Space_Grotesk] text-lg font-bold text-[#fffbf5]">
                          {item.title}
                        </h4>
                        {item.years && (
                          <span className="font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#a99fe0]">
                            {item.years}
                          </span>
                        )}
                      </div>
                      {item.place && (
                        <p className="font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#a99fe0] mt-1">
                          {item.place}
                        </p>
                      )}
                      <p className="font-[Space_Mono] text-sm leading-relaxed text-[#ddd8f5] mt-3">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <div className="min-h-[60vh] flex flex-col justify-center px-6 md:px-16 ">
        <RevealOnScroll>
          <SectionHeader
            index="02"
            title="What I work with"
            note="Languages & tools"
          />

          {stack.map(({ title, skills }, i) => (
            <div
              key={title}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-10 border-b-2 border-dashed border-[#c9dc8a]"
            >
              <div className="flex items-center gap-8 md:gap-14 md:pl-4">
                <span className="font-[Oswald] font-bold text-4xl text-[#bdb8ae]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[Oswald] font-bold uppercase leading-none text-[#14160d] text-5xl md:text-6xl">
                  {title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}

export { About };
