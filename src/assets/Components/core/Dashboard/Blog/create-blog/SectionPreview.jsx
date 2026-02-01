import { FiTrash2 } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPatchPlus } from "react-icons/bs";
import SubSectionModal from "./sub-section/SubSectionModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteSection } from "../../../../../../services/operations/section";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import { setEdit } from "../../../../../../slices/blog";
import SectionModal from "./SectionModal";
import SubSectionPreview from "./sub-section/SubSectionPreview";

const SectionPreview = ({}) => {
  const { edit } = useSelector((state) => state.blog);
  const { token } = useSelector((state) => state.auth);
  const { blog } = useSelector((state) => state.blog);
  const [sectionData, setSectionData] = useState("");
  const [modal, setModal] = useState(null);
  const [sectionModal, setSectionModal] = useState(false);
  const dispatch = useDispatch();

  const [activeSection, setActiveSection] = useState(null);
  const [subSectionModal, setSubSectionModal] = useState(false);
  const { contents: sections } = blog;

  //   HANDLE ACTIVE
  const handleActive = (index) => {
    setActiveSection((prev) => (prev === index ? null : index));
  };

  //   SUB SECTION ADD KRNA HAI
  const [sectionId, setSectionId] = useState("");
  const addSubSection = (sectionId) => {
    setSectionId(sectionId);
    setSubSectionModal(true);
  };

  // HANDLE DELETE
  const handleDeleteSection = async (sectionId) => {
    await deleteSection(token, sectionId, dispatch);
    return setModal(null);
  };

  // HANDLE EDIT
  const handleEdit = (sectionData) => {
    if (!sectionData) return;

    setSectionData(sectionData);
    dispatch(setEdit(true));
    setModal(null);
    setSectionModal(true);
    return;
  };

  useEffect(() => {}, [edit]);
  return (
    <div className="mt-6 space-y-4">
      {sections?.map((sec) => (
        <motion.div
          key={sec?._id}
          className="max-w-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* SECTION */}
          <motion.div
            onClick={() => handleActive(sec?._id)}
            className="flex justify-between items-center cursor-pointer 
            bg-gradient-to-r from-green-500 via-red-400 to-pink-500 
            py-2 px-4 border rounded-tl-2xl rounded-br-2xl overflow-hidden"
            // whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* TEXT */}
            <div>
              <h2 className="text-xs font-semibold capitalize text-black">
                {sec?.sectionName}
              </h2>
              <p className="text-sm text-gray-800">
                {sec?.description.substring(0, 70)}...
              </p>
            </div>

            {/* ICONS */}
            <motion.div
              className="flex gap-x-3"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* PLUS */}
              <motion.button
                onClick={() => addSubSection(sec?._id)}
                className="text-xl font-bold text-green-900 cursor-pointer"
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  // color: ["#fff", "#ddd"],
                }}
                whileTap={{ scale: 0.9 }}
              >
                <BsPatchPlus />
              </motion.button>

              {/* EDIT */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setModal({
                    title: "Edit Section?",
                    description: "Do you want to edit this section details?",
                    confirmText: "Edit",
                    cancelText: "Cancel",
                    onConfirm: () => handleEdit(sec),
                    onCancel: () => setModal(null),
                  })
                }
              >
                <CiEdit
                  className="text-yellow-100 cursor-pointer"
                  fontSize={18}
                />
              </motion.div>

              {/* DELETE */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setModal({
                    title: "Permanent Delete!",
                    description:
                      "This section and all its content will be deleted forever. You won't be able to recover it.",
                    confirmText: "Yes, Delete",
                    cancelText: "No, Keep it",

                    onConfirm: () => handleDeleteSection(sec._id),
                    onCancel: () => setModal(null),
                  })
                }
              >
                <FiTrash2 className="text-yellow-300 cursor-pointer" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SUB SECTIONS */}
          <AnimatePresence>
            {activeSection === sec?._id && (
              <motion.div
                className="ml-6 mt-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SubSectionPreview subSections={sec.subSections} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* MODAL */}
      {/* {} */}
      {modal && <ConfirmationModal modalData={modal} />}
      {/* SECTION MODAL */}
      {sectionModal && (
        <SectionModal setModal={setSectionModal} sectionData={sectionData} />
      )}
      {/* SUB SECTION MODAL */}
      <SubSectionModal
        isOpen={subSectionModal}
        onClose={() => setSubSectionModal(false)}
        // onSubmit={handleSubSectionSubmit}
        sectionId={sectionId}
      />
    </div>
  );
};

export default SectionPreview;
