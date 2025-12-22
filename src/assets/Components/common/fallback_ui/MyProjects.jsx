import React from "react";
import { motion } from "framer-motion";
import { FiFolderPlus } from "react-icons/fi";

const EmptyProjectUi = () => {
  return (
    <div className="min-h-[calc(100vh-60px)]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-20 text-center text-gray-400 gap-3"
      >
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="opacity-70"
        >
          <FiFolderPlus size={40} />
        </motion.div>

        {/* Heading */}
        <h2 className="text-lg font-semibold text-gray-200">
          No Project Created
        </h2>

        {/* Text */}
        <p className="text-sm max-w-[340px] opacity-80">
          There are no projects available right now. <br /> We will add projects
          in the future. Thank you for visiting.
        </p>
      </motion.div>
    </div>
  );
};

export default EmptyProjectUi;
