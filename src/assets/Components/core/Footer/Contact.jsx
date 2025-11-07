import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" h-fit w-fit px-6 max-w-[400px]  md:flex flex-col items-center md:my-0">
      <h1 className="text-3xl font-extrabold leading-tight md:mb-8 mb-2">
        <span className="text-gray-100">Contact</span>
      </h1>

      <div className="text-lg text-slate-300 space-y-2">
        {/* Email */}
        <a
          href="mailto:riteshmishra.dev@gmail.com"
          className="flex items-center gap-3 hover:text-indigo-500 transition"
        >
          <FaEnvelope className="text-xl" />
          riteshmishra.dev@gmail.com
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919565672752?text=Hi%20Ritesh!%20I%20saw%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-green-500 transition"
        >
          <FaWhatsapp className="text-xl" />
          +91 9565672752
        </a>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/ritesh-mishra-02199235a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/riiteshMishra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/ritesh.mishra.205409"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
