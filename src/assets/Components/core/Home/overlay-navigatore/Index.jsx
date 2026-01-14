import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { openRoutes } from "./data";
import { dashboardLinks } from "../../../../Data/dashboard-links";
import { motion } from "framer-motion";

const OverlayBar = () => {
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();

  const activeRoute = (path) => path === location.pathname;

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky bottom-0 left-0 z-20 sm:hidden
        bg-gray-950/90 backdrop-blur-md
        border-t border-white/80
        rounded-t-2xl px-2 py-3"
    >
      <div className="flex items-center justify-around">
        {(user ? dashboardLinks : openRoutes).map((link) => {
          if (user && link.type && link.type !== user?.accountType) return null;

          const IconComponent = user ? FaIcons[link.icon] : link.icon;

          const isActive = activeRoute(link.path);

          return (
            <Link key={link.id} to={link.path} title={link.name}>
              <motion.div
                whileTap={{ scale: 0.85 }}
                animate={{
                  y: isActive ? -8 : 0,
                }}
                className="relative flex flex-col items-center"
              >
                {/* ⚡ Lightning Glow */}
                {isActive && (
                  <motion.span
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full
                      bg-white/30 blur-xl"
                  />
                )}

                {/* Icon */}
                {IconComponent && (
                  <IconComponent
                    className={`relative z-10 text-xl transition-all ${
                      isActive
                        ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                        : "text-gray-600"
                    } ${isActive ? "text-lg" : "text-sm"}`}
                  />
                )}

                {/* Active Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="overlay-indicator"
                    className="absolute -bottom-2 h-1 w-6 rounded-full bg-white"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};

export default OverlayBar;
