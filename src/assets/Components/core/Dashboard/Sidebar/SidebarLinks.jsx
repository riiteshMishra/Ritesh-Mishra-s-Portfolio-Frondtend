import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

const SidebarLinks = ({ link }) => {
  const IconComponent = FaIcons[link.icon];
  const location = useLocation();

  const isActive = location.pathname === link.path;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      <Link
        to={link.path}
        className={`group flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
          ${
            isActive
              ? "bg-amber-400/20 text-amber-300 shadow-inner border"
              : "text-gray-300 hover:bg-white/10 hover:text-white"
          }`}
      >
        {/* Icon animation */}
        {IconComponent && (
          <motion.div
            animate={
              isActive ? { rotate: 2, scale: 1.15 } : { rotate: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 200 }}
          >
            <IconComponent className="text-base" />
          </motion.div>
        )}

        {/* Text animation */}
        <motion.span
          initial={false}
          animate={isActive ? { x: 2, opacity: 1 } : { x: 0, opacity: 0.9 }}
          transition={{ duration: 0.2 }}
          className="tracking-wide"
        >
          {link.name}
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default SidebarLinks;
