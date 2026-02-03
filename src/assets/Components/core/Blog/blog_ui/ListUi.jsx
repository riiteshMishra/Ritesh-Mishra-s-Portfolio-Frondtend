import { motion } from "framer-motion";

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const ListUi = ({ data }) => {
  if (!data?.listItems?.length) return null;

  return (
    <motion.ul
      variants={listContainer}
      initial="hidden"
      animate="show"
      className="mt-3 space-y-2"
    >
      {data.listItems.map((item, idx) => (
        <motion.li
          key={idx}
          variants={listItem}
          whileHover={{ scale: 1.02 }}
          className="
            flex items-start gap-2
            px-3 py-2
            rounded-lg
            bg-black/30
            border border-gray-700
            text-sm text-gray-300
          "
        >
          <span className="text-green-400 font-bold select-none">•</span>
          <span className="leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ListUi;
