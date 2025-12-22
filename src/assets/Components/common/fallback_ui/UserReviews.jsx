import React from "react";
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const EmptyUserReviews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center gap-3 py-16 text-center text-richblack-300"
    >
      {/* Icon animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="opacity-70"
      >
        <FiStar size={34} />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg font-semibold text-richblack-100"
      >
        No Reviews Yet
      </motion.h2>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-sm max-w-[320px] opacity-80"
      >
        You have not written any reviews yet. When you add a review, it will
        appear here.
      </motion.p>
    </motion.div>
  );
};

export default EmptyUserReviews;
