import { motion } from "framer-motion"
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ritesh-mishra-02199235a/",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10",
  },
  {
    icon: FaGithub,
    href: "https://github.com/riiteshMishra",
    label: "GitHub",
    color: "hover:text-white hover:border-white/30 hover:bg-white/10",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/ritesh.mishra.205409",
    label: "Facebook",
    color: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/10",
  },
]

const Contact = () => {
  return (
    <section
      aria-labelledby="footer-contact"
      className="max-w-[400px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-5"
      >

        {/* heading */}
        <motion.div variants={itemVariants}>

          <h2
            id="footer-contact"
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-br from-white via-white/80 to-white/20 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-5 rounded-full bg-primary/70" />
            <p className="text-sm font-semibold tracking-widest text-primary/90 uppercase">
              Let's connect
            </p>
          </div>

        </motion.div>

        {/* email */}
        <motion.a
          variants={itemVariants}
          whileHover={{ x: 4 }}
          href="mailto:riteshmishra.dev@gmail.com"
          aria-label="Send email to Ritesh Mishra"
          className="group flex items-center justify-center w-fit px-8 gap-3 rounded-xl border border-white/8 bg-white/[0.03]  py-3 text-white/60 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
        >
          <FaEnvelope
            className="shrink-0 text-primary/70 transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
          <span className="text-sm font-medium truncate">
            riteshmishra.dev@gmail.com
          </span>
        </motion.a>

        {/* whatsapp */}
        <motion.a
          variants={itemVariants}
          whileHover={{ x: 4 }}
          href="https://wa.me/919565672752?text=Hi%20Ritesh!%20I%20saw%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Ritesh Mishra on WhatsApp"
          className="group flex items-center justify-center w-fit px-8  gap-3 rounded-xl border border-green-500/15 bg-green-500/[0.05]  py-3 text-white/60 backdrop-blur-xl transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-400 hover:shadow-[0_0_16px_-4px_rgba(74,222,128,0.3)]"
        >
          <FaWhatsapp
            className="shrink-0 text-green-500/60 transition-colors group-hover:text-green-400"
            aria-hidden="true"
          />
          <span className="text-sm font-medium">+91 9565672752</span>
        </motion.a>

        {/* social icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 pt-1"
          aria-label="Social media links"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.93 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ritesh Mishra on ${label}`}
              className={`flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] text-white/50 text-base backdrop-blur-xl transition-all duration-300 ${color}`}
            >
              <Icon aria-hidden="true" />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Contact