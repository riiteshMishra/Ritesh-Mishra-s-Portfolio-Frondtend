import React from "react";
import { motion } from "framer-motion";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const NoProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-60px)] flex items-center justify-center relative overflow-hidden">
      {/* Animated SVG Blob */}
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[500px] h-[500px] -z-10 opacity-20"
        initial={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1, 0.9],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill="#9CA3AF"
          d="M39.6,-58.7C52.8,-52.3,66.3,-44.4,72.6,-32.7C78.9,-21,78,-5.5,73.2,8.1C68.4,21.7,59.7,33.3,48.3,44.7C36.9,56.1,22.9,67.3,6.7,70.8C-9.5,74.3,-19,70.1,-30.9,63.5C-42.8,56.9,-57.1,47.9,-64.2,35.1C-71.3,22.3,-71.2,5.8,-66.6,-7.7C-62,-21.2,-52.9,-31.7,-42.1,-38.9C-31.3,-46.1,-15.6,-50,0.4,-50.6C16.4,-51.2,32.8,-48.5,39.6,-58.7Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-4"
      >
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4 text-gray-600"
        >
          <HiOutlineCodeBracket size={64} />
        </motion.div>

        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
          No Projects Found
        </h2>

        <p className="text-gray-500 max-w-md mb-6">
          There are no projects available right now. Please check back later or
          explore other work.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-gray-800 text-white text-sm shadow-md hover:bg-gray-700 transition cursor-pointer"
          onClick={() => navigate("/about")}
        >
          View Skills
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NoProjects;
