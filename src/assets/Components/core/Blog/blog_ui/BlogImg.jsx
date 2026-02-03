import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogImg = ({ image,title }) => {
  return (
    <motion.div
      className="w-full h-[180px] rounded-xl overflow-hidden bg-gray-700 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        {image ? (
          <motion.img
            key="image"
            src={image}
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.div
            key="placeholder"
            className="text-center px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-medium  text-gray-400">
              No image available
            </p>
            <p className="text-sm text-gray-300">
              This blog does not have a thumbnail
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogImg;
