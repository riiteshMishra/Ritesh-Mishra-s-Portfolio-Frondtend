import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const UseFullLinks = () => {
  const location = useLocation();

  const useFullLinks = [
    { id: 1, text: "Home", link: "/", icon: <FaHome aria-hidden="true" /> },
    {
      id: 2,
      text: "About",
      link: "/about",
      icon: <FaUser aria-hidden="true" />,
    },
    {
      id: 3,
      text: "Projects",
      link: "/projects",
      icon: <FaBriefcase aria-hidden="true" />,
    },
    {
      id: 4,
      text: "Blogs",
      link: "/blogs",
      icon: <FaBlog aria-hidden="true" />,
    },
    {
      id: 5,
      text: "Contact Us",
      link: "/contact-us",
      icon: <FaEnvelope aria-hidden="true" />,
    },
  ];

  return (
    <section
      aria-labelledby="footer-useful-links"
      className="h-fit w-fit px-6 max-w-[400px] flex flex-col items-center"
    >
      <h2
        id="footer-useful-links"
        className="text-3xl font-extrabold leading-tight mb-4 text-gray-100"
      >
        Useful Links
      </h2>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        {useFullLinks.map(({ id, text, link, icon }) => {
          const isActive = location.pathname === link;

          return (
            <motion.li key={id} variants={itemVariants}>
              <Link
                to={link}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-4 px-3 py-2 rounded-lg transition-all
                  ${
                    isActive
                      ? "text-indigo-500 bg-indigo-500/10"
                      : "text-gray-400 hover:text-indigo-500"
                  }
                `}
              >
                {/* Icon */}
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-lg ${isActive ? "scale-110" : ""}`}
                >
                  {icon}
                </motion.span>

                {/* Text */}
                <motion.span className="relative" whileHover={{ x: 4 }}>
                  {text}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </motion.span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default UseFullLinks;
