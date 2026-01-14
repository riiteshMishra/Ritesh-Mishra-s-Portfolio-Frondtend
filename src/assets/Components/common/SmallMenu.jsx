import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../Data/navbar";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SmallMenu = ({ setSlideBar, slideBar }) => {
  //  Scroll LOCK when menu is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <motion.div
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-700 rounded-lg top-[60px]  left-0 right-0 select-none flex flex-col md:hidden backdrop-blur-3xl transition-all duration-300 z-20 absolute"
      onClick={() => setSlideBar(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sm:px-10 flex sm:items-center justify-center"
      >
        <ul className="flex flex-col sm:flex-row text-3xl text-richblack-100 gap-5">
          {navbarLinks.map((li) => (
            <li key={li.id}>
              <NavLink
                to={li.path}
                onClick={() => setSlideBar(false)}
                className={({ isActive }) =>
                  `Bebas capitalize transition-colors duration-300 ${
                    isActive
                      ? "text-amber-300"
                      : "text-amber-50 hover:text-amber-200"
                  }`
                }
              >
                {li.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SmallMenu;
