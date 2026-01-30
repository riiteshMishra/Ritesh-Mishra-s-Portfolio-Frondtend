import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SubSectionModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit({ title });
    setTitle("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl w-[90%] max-w-[400px] p-5"
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 30 }}
          >
            <h2 className="text-lg font-semibold mb-3">Add Sub Section</h2>

            <input
              type="text"
              placeholder="Sub section title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 outline-none"
            />

            <div className="flex justify-end gap-3">
              <button onClick={onClose} className="px-4 py-1 rounded border">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-1 rounded bg-indigo-600 text-white"
              >
                Add
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubSectionModal;
