import { motion } from "framer-motion";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import { RESUME_URL } from "../../../../utils/utilsData";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Intro = () => {
  return (
    <section
      aria-labelledby="footer-intro"
      className="px-3 max-w-[400px] h-fit w-fit"
    >
      <motion.div
        className="rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Name */}
        <motion.h2
          id="footer-intro"
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          <span className="text-indigo-600">Ritesh Mishra</span>
        </motion.h2>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="mt-2 text-lg text-slate-400 font-bold"
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-slate-500 max-w-2xl"
        >
          I’m a passionate MERN Stack developer who loves building beautiful,
          responsive, and functional web applications. My goal is to create
          impactful digital experiences through clean code and modern UI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap gap-3 justify-between"
        >
          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/919565672752?text=${encodeURIComponent(
              "Hey Ritesh! 👋 I saw your portfolio and wanted to connect with you."
            )}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Ritesh Mishra on WhatsApp"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-green-600 text-white font-medium shadow hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp className="text-xl" aria-hidden="true" />
            WhatsApp
          </motion.a>

          {/* Resume */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={RESUME_URL  }
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume of Ritesh Mishra"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 hover:text-black transition-colors"
          >
            <FaDownload aria-hidden="true" />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
