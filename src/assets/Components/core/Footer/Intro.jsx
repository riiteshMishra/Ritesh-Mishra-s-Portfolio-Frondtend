import { motion } from "framer-motion"
import { FaDownload, FaWhatsapp } from "react-icons/fa"
import { RiRadioButtonLine } from "react-icons/ri"

import { RESUME_URL } from "../../../../utils/utilsData"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const Intro = () => {
  return (
    <section
      aria-labelledby="footer-intro-heading"
      className="max-w-[420px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-5"
      >

        {/* heading */}
        <motion.div variants={fadeVariants}>

          {/* availability badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 mb-3">
            <RiRadioButtonLine className="text-emerald-400 text-[10px] animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-medium text-emerald-400 tracking-wide">
              Available for work
            </span>
          </div>

          <h3
            id="footer-intro-heading"
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-br from-white via-white/80 to-white/20 bg-clip-text text-transparent">
              Ritesh Mishra
            </span>
          </h3>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-5 rounded-full bg-primary/70" />
            <p className="text-sm font-semibold tracking-widest text-primary/90 uppercase">
              Full Stack Developer
            </p>
          </div>

        </motion.div>

        {/* description */}
        <motion.p
          variants={fadeVariants}
          className="text-white/50 leading-relaxed text-[15px]"
        >
          MERN Stack developer focused on building scalable, responsive, and
          high-performance web applications with modern UI and clean architecture.
        </motion.p>

        {/* buttons */}
        <motion.div
          variants={fadeVariants}
          className="flex flex-wrap items-center gap-3 pt-1"
        >

          {/* whatsapp */}
          <motion.a
            whileTap={{ scale: 0.96 }}
            style={{ willChange: "transform" }} // FIX
            href={`https://wa.me/919565672752?text=${encodeURIComponent(
              "Hey Ritesh! 👋 I saw your portfolio and wanted to connect with you."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Ritesh Mishra on WhatsApp"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/25 px-5 py-2.5 text-sm font-medium text-green-400 backdrop-blur-xl transition-all duration-300 hover:bg-green-500/20 hover:border-green-500/40 hover:shadow-[0_0_16px_-4px_rgba(74,222,128,0.4)]"
          >
            <FaWhatsapp className="text-base" aria-hidden="true" />
            WhatsApp
          </motion.a>

          {/* resume */}
          <motion.a
            whileTap={{ scale: 0.96 }}
            style={{ willChange: "transform" }} // FIX
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Ritesh Mishra's resume"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/20"
          >
            <FaDownload className="text-[13px]" aria-hidden="true" />
            Resume
          </motion.a>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default Intro