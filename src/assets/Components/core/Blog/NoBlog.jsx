import React from "react";
import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../../../../utils/utilsData";
import { useNavigate } from "react-router-dom";

const NoBlog = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate()
  const handleClick = () => navigate("/dashboard/create-blog");
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
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill="#9CA3AF"
          d="M47.4,-63.5C59.6,-54.5,66.7,-40.3,71.5,-24.8C76.3,-9.3,78.7,7.6,73.3,21.7C67.8,35.8,54.5,47.1,40.2,54.4C25.9,61.7,10.9,65,-4.1,70.3C-19.1,75.6,-38.2,82.9,-51.7,75.5C-65.2,68.1,-73.1,46,-75.4,25.2C-77.6,4.4,-74.3,-15.1,-66.5,-31.4C-58.7,-47.7,-46.4,-60.8,-31.8,-67.8C-17.2,-74.8,-0.3,-75.7,15.6,-73.4C31.5,-71.1,47.4,-63.5,47.4,-63.5Z"
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
          <HiOutlineDocumentText size={64} />
        </motion.div>

        <h2 className="text-2xl font-semibold text-gray-500 mb-2">
          No Blogs Found
        </h2>

        <p className="text-gray-500 max-w-md mb-6">
          There are no blogs available right now. Please check back later or
          explore other categories.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded-full bg-gray-800 text-white text-sm shadow-md hover:bg-gray-700 transition cursor-pointer"
        >
          Explore Categories
        </motion.button>
        {user?.accountType === ACCOUNT_TYPE.ADMIN && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gray-800 text-white text-sm shadow-md hover:bg-gray-700 transition cursor-pointer my-4"
            onClick={handleClick}
          >
            create blog
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default NoBlog;
