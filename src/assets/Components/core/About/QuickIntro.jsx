import { FaDownload, FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  /* -------- Basic Info -------- */
  const NAME = "Ritesh Mishra";
  const ROLE = "Full Stack Developer (MERN Stack)";
  const DESCRIPTION =
    "I build fast, responsive, and scalable web applications, focusing on clean UI, smooth UX, and maintainable code.";

  /* -------- External Links -------- */
  const RESUME_URL =
    "https://drive.google.com/uc?export=download&id=1K5yGaywe36n3oHbsLkDPwSGVgHPspQ4t";

  const WHATSAPP_URL =
    "https://wa.me/919565672752?text=Hi%20Ritesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 py-12"
      aria-label="Introduction section"
    >
      <header className="bg-white shadow-lg rounded-2xl p-8 grid gap-8 md:grid-cols-3 items-center">
        {/* -------- Content -------- */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            <span className="text-indigo-600">{NAME}</span>
          </h1>

          <h2 className="text-lg md:text-xl text-gray-600 font-semibold">
            {ROLE}
          </h2>

          <p className="text-gray-500 max-w-xl leading-relaxed">
            {DESCRIPTION}
          </p>

          {/* -------- CTAs -------- */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Ritesh on WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-green-600 text-white font-medium shadow hover:bg-green-700 transition"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Ritesh Mishra Resume"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              <FaDownload aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* -------- Profile Image -------- */}
        <figure className="flex justify-center md:justify-end">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500">
            <img
              src="/ritesh_mishra.jpeg"
              alt="Ritesh Mishra - Full Stack MERN Developer"
              width="300"
              height="300"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      </header>
    </section>
  );
};

export default Intro;
