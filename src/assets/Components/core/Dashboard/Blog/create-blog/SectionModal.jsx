import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 40,
  },
};

const SectionModal = ({ setModal, sectionTitleRef, setSections }) => {
  // HANDLE NEXT
  const next = async () => {
    console.log("input field", sectionTitleRef.current.value);
    if (
      sectionTitleRef.current.value === "" ||
      sectionTitleRef.current.value.length === 0
    )
      return toast.error("Input Field Cannot Be Empty");

    // EDGE CASE HANDLE
    setSections((prev) => [
      ...prev,
      {
        title: sectionTitleRef.current.value.trim(),
      },
    ]);
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-xl px-4 flex items-center justify-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => setModal(false)}
      >
        <motion.div
          className="bg-white/20 p-6 rounded-xl w-[400px]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-lg font-semibold mb-4">Create Section</h1>

          <p className="text-sm mb-1">Section title</p>
          <input
            type="text"
            className="FormStyle w-full mb-3"
            placeholder="Enter section name"
            ref={sectionTitleRef}
            maxLength={70}
          />

          <div className="flex justify-between">
            <button
              onClick={() => setModal(false)}
              className="text-gray-800 cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                next();
                setModal(false);
              }}
              className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded"
            >
              Next
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionModal;
