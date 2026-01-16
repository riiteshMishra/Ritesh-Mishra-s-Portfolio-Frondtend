import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../common/logo.css";

const logoVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Heading = ({ title = "My Projects", to = "/" }) => {
  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="logo-wrapper flex justify-center items-center mb-10"
    >
      <motion.div
        className="relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
      >
        {/* text */}
        <Link to={"#"} className="logo-text relative z-10 cursor-pointer">
          {title}
        </Link>

        {/* subtle shine sweep on hover */}
        <motion.span
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r
            from-transparent via-white/30 to-transparent
            skew-x-12
          "
          initial={{ x: "-120%" }}
          whileHover={{ x: "120%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* underline (hover only) */}
        <motion.span
          className="
            absolute left-1/2 -bottom-2
            h-[3px] w-24
            -translate-x-1/2 origin-center
            rounded-full bg-amber-400
          "
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Heading;
