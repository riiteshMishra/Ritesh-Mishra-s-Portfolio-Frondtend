import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSection, setBlog } from "../../../../../../slices/blog";
import { createSection } from "../../../../../../services/operations/section";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, y: 40 },
};

const SectionModal = ({ setModal, blogId }) => {
  const { blog } = useSelector((state) => state.blog);

  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  //  Controlled state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // HANDLE SUBMIT
  const next = async () => {
    if (!title.trim()) {
      return toast.error("Section title is required");
    }

    const formData = {
      sectionName: title.trim(),
      description: description.trim(),
      blogId,
    };

    // API CALL
    setLoading(true);
    const result = await createSection(token, formData, dispatch);
    setLoading(false);
    if (!result) return;
    console.log(blog);
    // Save API response in localStorage
    // dispatch(setBlog(result));
    dispatch(setBlog(result));

    setModal(false);
  };

  if (loading) <div className="text-white text-4xl">loading</div>;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-xl px-4 flex items-center justify-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => setModal(false)}
      >
        <motion.div
          className="bg-white/20 p-6 rounded-xl w-[400px] border border-yellow-400"
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
            maxLength={70}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <p className="text-sm mb-1">Description</p>
          <textarea
            className="FormStyle w-full mb-4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex justify-between">
            <button
              onClick={() => setModal(false)}
              className="text-gray-800 cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={next}
              className="px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded"
            >
              Create
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionModal;
