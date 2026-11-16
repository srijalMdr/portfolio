import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

const fieldClass =
  "w-full bg-transparent border-0 border-b-2 border-dashed border-[#4b3fa0] px-0 py-3 font-[Space_Grotesk] text-lg text-[#fffbf5] placeholder:text-[#7d72c4] transition-colors duration-300 focus:outline-none focus:border-solid focus:border-[#fffbf5]";

const labelClass =
  "block font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#a99fe0]";

function Contact() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("sent");
        setFormdata({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-16 bg-[#1f1270]"
    >
      <RevealOnScroll>
        {/* Header */}
        <div className="flex items-end justify-between gap-4 pb-6 border-b-2 border-dashed border-[#4b3fa0]">
          <div className="flex items-end gap-6">
            <span className="font-[Space_Mono] text-xs font-bold text-[#fffbf5] mb-2">
              (04)
            </span>
            <h2 className="font-[Oswald] font-bold uppercase leading-none text-[#fffbf5] text-5xl md:text-7xl">
              Get in touch
            </h2>
          </div>
          <span className="hidden sm:block font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#a99fe0] mb-2">
            // Say hello
          </span>
        </div>

        <div className="mt-12">
          {/* Pitch */}
          {/* <div>
            <p className="font-[Oswald] font-bold uppercase leading-[0.95] text-[#fffbf5] text-5xl md:text-6xl">
              Got a project?
              <br />
              <span className="inline-block mt-2 px-3 bg-[#7350ff] text-[#fffbf5]">
                Let's build it.
              </span>
            </p>
            <p className="mt-8 max-w-md font-[Space_Mono] text-sm leading-relaxed text-[#ddd8f5]">
              Whether it's a full-stack app, a new feature or just an idea you
              want to talk through — drop me a message and I'll get back to
              you.
            </p>
          </div> */}

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={fieldClass}
                placeholder="Your name"
                onChange={(e) =>
                  setFormdata({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={fieldClass}
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormdata({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={4}
                className={`${fieldClass} resize-none`}
                placeholder="Tell me about your project…"
                onChange={(e) =>
                  setFormdata({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#fffbf5] bg-[#fffbf5] font-[Space_Mono] text-sm font-bold uppercase tracking-[0.15em] text-[#1f1270] cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-2 disabled:opacity-60 disabled:cursor-wait disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 ease-out group-hover:translate-x-2"
                >
                  ⟶
                </span>
              </button>

              <p
                role="status"
                className="font-[Space_Mono] text-[11px] uppercase tracking-[0.15em]"
              >
                {status === "sent" && (
                  <span className="text-[#9eef80]">
                    ✓ Message sent — thanks!
                  </span>
                )}
                {status === "error" && (
                  <span className="text-[#ffb4b4]">
                    Something went wrong. Please try again.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export { Contact };
