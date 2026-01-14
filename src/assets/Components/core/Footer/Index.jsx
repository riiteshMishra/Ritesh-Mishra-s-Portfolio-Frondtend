import { motion } from "framer-motion";
import Contact from "./Contact";
import Intro from "./Intro";
import UseFullLinks from "./UseFullLinks";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      role="contentinfo"
      aria-label="Website Footer"
      className="text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        {/* Footer main sections */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-y-10 justify-between">
          {/* About / Brand */}
          <motion.section
            aria-labelledby="footer-about"
            variants={itemVariants}
          >
            <h2 id="footer-about" className="sr-only">
              About Ritesh Mishra
            </h2>
            <Intro />
          </motion.section>

          {/* Contact information */}
          <motion.address
            aria-labelledby="footer-contact"
            className="not-italic"
            variants={itemVariants}
          >
            <h2 id="footer-contact" className="sr-only">
              Contact Information
            </h2>
            <Contact />
          </motion.address>

          {/* Footer navigation */}
          <motion.nav aria-labelledby="footer-links" variants={itemVariants}>
            <h2 id="footer-links" className="sr-only">
              Quick Links
            </h2>
            <UseFullLinks />
          </motion.nav>
        </div>

        {/* Divider */}
        <motion.hr
          aria-hidden="true"
          className="my-6 sm:my-8 border-gray-600"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-center text-xs sm:text-sm"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} <strong>Ritesh Mishra</strong>. All
          rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
