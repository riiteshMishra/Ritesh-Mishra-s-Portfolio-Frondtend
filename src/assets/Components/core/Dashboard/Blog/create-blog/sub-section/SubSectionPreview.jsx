import { motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import ConfirmationModal from "../../../../../common/ConfirmationModal";

const SubSectionPreview = ({ subSections }) => {
  const [modal, setModal] = useState(null);

  if (!subSections || subSections.length === 0) {
    return (
      <p className="text-xs text-gray-400 italic">No sub sections added</p>
    );
  }

  // 👁️ PREVIEW
  const handlePreview = (sub) => {
    console.log("PREVIEW SUB SECTION", sub);
  };

  // ✏️ EDIT
  const handleEdit = (sub) => {
    console.log("EDIT SUB SECTION", sub);
  };

  // 🗑 DELETE
  const handleDelete = async (subSectionId) => {
    console.log("DELETE SUB SECTION", subSectionId);
    setModal(null);
  };

  return (
    <>
      <div className="space-y-2">
        {subSections.map((sub) => (
          <motion.div
            key={sub._id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="
              flex items-center justify-between
              bg-white px-3 py-2
              rounded-lg border border-gray-200
              text-sm text-gray-800
              shadow-sm hover:shadow-md
              cursor-pointer
              hover:bg-gray-50
            "
            onClick={() => handlePreview(sub)}
          >
            {/* LEFT */}
            <div className="flex items-center gap-2 overflow-hidden cursor-pointer">
              <motion.span
                whileHover={{ x: 2 }}
                className="text-indigo-600 font-bold"
              >
                ▸
              </motion.span>

              <span className="truncate font-medium">{sub.title}</span>
            </div>

            {/* ACTIONS */}
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* EDIT */}
              <motion.button
                whileHover={{ scale: 1.25, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleEdit(sub)}
                className="
                  text-blue-600 hover:text-blue-700
                  cursor-pointer
                "
              >
                <CiEdit size={16} />
              </motion.button>

              {/* DELETE */}
              <motion.button
                whileHover={{ scale: 1.25, rotate: -12 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setModal({
                    title: "Delete Sub Section?",
                    description: "This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    onConfirm: () => handleDelete(sub._id),
                    onCancel: () => setModal(null),
                  })
                }
                className="
                  text-red-500 hover:text-red-600
                  cursor-pointer
                "
              >
                <FiTrash2 size={15} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CONFIRMATION MODAL */}
      {modal && <ConfirmationModal modalData={modal} />}
    </>
  );
};

export default SubSectionPreview;
