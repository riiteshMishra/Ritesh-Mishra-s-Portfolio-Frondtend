import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.25 },
  },
};

const NoNotification = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col items-center justify-center h-[200px] 
        text-gray-400 text-sm font-medium text-center gap-1"
    >
      <motion.p variants={item} className="text-2xl">No notifications at the moment</motion.p>

      <motion.p variants={item} className="text-xs text-gray-500">
        Please check back after some time
      </motion.p>

      <motion.p variants={item} className="text-xs text-gray-500">
        or refresh the page
      </motion.p>
    </motion.div>
  );
};

export default NoNotification;
