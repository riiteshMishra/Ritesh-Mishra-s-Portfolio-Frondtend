import { FaDownload, FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  const name = "Ritesh Mishra";
  const role = "Full Stack Developer — MERN";
  const description =
    "I build responsive web apps and enjoy turning complex problems into simple, beautiful interfaces.";

  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1K5yGaywe36n3oHbsLkDPwSGVgHPspQ4t";
  const whatsappUrl =
    "https://wa.me/919565672752?text=Hi%20Ritesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 grid gap-8 md:grid-cols-3 items-center">
        {/* -------- Text Section -------- */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            <span className="text-indigo-600 font-bold">{name}</span>
          </h1>

          <p className="text-lg text-gray-600 font-medium">{role}</p>
          <p className="text-gray-500">{description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-green-600 text-white/80 font-medium shadow hover:bg-green-700 transition-all duration-200"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-200"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>

        {/* -------- Avatar Section -------- */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500">
            <img
              src="https://res.cloudinary.com/dwpplwqzs/image/upload/f_auto,q_auto/v1758948559/Portfolio-site/sees9qxv9tmbifoauvxz.jpg"
              loading="lazy"
              alt={name}
              width="300"
              height="300"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
