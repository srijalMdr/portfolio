import { RevealOnScroll } from "../RevealOnScroll";

function About() {
  const frontendSkills = ["react", "vue", "typeScript", "tailwindcss"];
  const backendSkills = ["Node.js", "AWS", "MongoDB", "Supabase"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate new frontend developer with experience in building real
              life self projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">👨🏻‍🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="mb-4">
                  <strong>BSc.CSIT</strong> St.Xaviers College (TU)[2022-2026]
                  <p>
                    Relevant Coursework: Web Development, Data Structure, Could
                    Computing, Computer Networking...
                  </p>
                </li>
                <li>
                  <strong>+2 Science</strong> Trinity Int College
                  (NEB)[2020-2022]
                  <p>
                    <strong>GPA:</strong>:3.51
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                👨🏻‍💻 Hackathon Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Code Yatra Hackathon[2nd Runner-Up]
                  </h4>
                  <p>
                    Developed an NFC-based livestock ID and profiling system to
                    improve Nepal’s outdated farming practices.{" "}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold"> SXC Sandbox 2.0</h4>
                  <p>
                    Built Aajivan, an AI-driven app helping elderly users manage
                    medications with scanning, reminders, and caretaker alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export { About };
