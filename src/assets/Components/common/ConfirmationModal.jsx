import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: -80,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 60,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const ConfirmationModal = ({ modalData }) => {
  const [loading, setLoading] = useState(false);
  if (!modalData) return null;

  const {
    title = "Are you sure?",
    description = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm = () => {},
    onCancel = () => {},
  } = modalData;

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={loading ? () => {} : () => onCancel()}
      >
        {/* Modal Card */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="
            w-full max-w-md bg-gray-800 rounded-2xl p-6
            shadow-xl
          "
        >
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-6">{description}</p>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              disabled={loading}
              className="
                px-4 py-2 rounded-md text-gray-300
                bg-gray-700 hover:bg-gray-600
                transition-all active:scale-95
                disabled:opacity-50 cursor-pointer
              "
            >
              {cancelText}
            </button>

            <button
              onClick={() => handleConfirm()}
              disabled={loading}
              className="
                px-4 py-2 rounded-md text-white
                bg-red-600 hover:bg-red-700
                transition-all active:scale-95
                disabled:opacity-50 cursor-pointer
              "
            >
              {loading ? "Processing..." : confirmText}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConfirmationModal;
