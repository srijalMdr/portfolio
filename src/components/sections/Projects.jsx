import { RevealOnScroll } from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Fast React Pizza Co</h3>
              <p className="text-gray-400 mb-4">
                Responsive pizza ordering web app with interactive UI, dynamic
                routing, and state management for seamless browsing and
                ordering.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Router", "Redux", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://srijalfastreactpizza.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Battle Pokemon</h3>
              <p className="text-gray-400 mb-4">
                Responsive and interactive Pokémon battle web app with
                type-based search, real-time battles, and battle history
                tracking for an engaging user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Router", "React Query", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://srijalpokemon.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                Responsive and visually engaging weather web app that lets users
                search by city name and explore detailed hourly forecasts for
                the coming days.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Query", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://srijalweather.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">The Wild-Oasis</h3>
              <p className="text-gray-400 mb-4">
                A hotel management web app for bookings, check-ins, cabin
                management, and real-time sales reports with integrated database
                operations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Query", "Styled Components", "Supabase"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://srijalwildoasis.netlify.app"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">World Wise</h3>
              <p className="text-gray-400 mb-4">
                An interactive web app that helps users record, explore, and
                visualize the places they’ve traveled around the world.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Context API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://srijalworldwise.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Mapty</h3>
              <p className="text-gray-400 mb-4">
                Interactive fitness tracking web app allowing users to log
                running or cycling workouts on a map, with persistent markers to
                view past activities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JS", "Leaflet JS", "Advanced DOM Manipulation"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://srijalmapty.netlify.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export { Projects };
