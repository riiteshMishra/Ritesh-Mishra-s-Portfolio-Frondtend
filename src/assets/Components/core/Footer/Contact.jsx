import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section
      aria-labelledby="footer-contact"
      className="h-fit w-fit px-6 max-w-[400px] flex flex-col "
    >
      {/* Heading (SEO safe) */}
      <h2
        id="footer-contact"
        className="text-3xl font-extrabold leading-tight  mb-4 text-gray-100"
      >
        Contact
      </h2>

      <motion.div
        className="text-lg text-slate-300 space-y-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Email */}
        <motion.a
          variants={itemVariants}
          href="mailto:riteshmishra.dev@gmail.com"
          aria-label="Send email to Ritesh Mishra"
          className="flex items-center gap-3 hover:text-indigo-500 transition-colors"
        >
          <FaEnvelope className="text-xl" aria-hidden="true" />
          <span>riteshmishra.dev@gmail.com</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          variants={itemVariants}
          href="https://wa.me/919565672752?text=Hi%20Ritesh!%20I%20saw%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Ritesh Mishra on WhatsApp"
          className="flex items-center gap-3 hover:text-green-500 transition-colors"
        >
          <FaWhatsapp className="text-xl" aria-hidden="true" />
          <span>+91 9565672752</span>
        </motion.a>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 pt-4 text-2xl"
          aria-label="Social media links"
        >
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/ritesh-mishra-02199235a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ritesh Mishra on LinkedIn"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin aria-hidden="true" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/riiteshMishra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ritesh Mishra on GitHub"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub aria-hidden="true" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.facebook.com/ritesh.mishra.205409"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ritesh Mishra on Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebook aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
