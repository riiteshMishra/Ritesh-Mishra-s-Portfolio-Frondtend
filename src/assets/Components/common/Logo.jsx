import { motion } from "framer-motion";
import "./logo.css";
import { Link } from "react-router-dom";

const logoVariants = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Logo = () => {
  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="logo-wrapper"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
      >
        <Link to="/" className="logo-text">
          Ritesh Mishra
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
