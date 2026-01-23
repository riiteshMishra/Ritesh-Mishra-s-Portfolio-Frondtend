import { motion } from "framer-motion";

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const InterestsBox = ({ interest }) => {
  return (
    <motion.span
      variants={chip}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.08 }}
      className="
        px-4 py-1.5 rounded-full
        text-sm font-medium capitalize
        bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20
        border border-gray-600
        text-gray-200
        backdrop-blur
        cursor-default
        select-none
      "
    >
      {interest}
    </motion.span>
  );
};

export default InterestsBox;
