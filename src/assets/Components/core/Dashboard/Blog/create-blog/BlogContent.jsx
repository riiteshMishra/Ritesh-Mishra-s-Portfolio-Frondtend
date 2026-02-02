import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionModal from "./SectionModal";
import SectionPreview from "./SectionPreview";
import { motion } from "framer-motion";
import { setEdit } from "../../../../../../slices/blog";

const BlogContent = () => {
  const { edit } = useSelector((state) => state.blog);
  const { blog } = useSelector((state) => state.blog);
  const { title, description, _id: blogId } = blog || {};
  const [modal, setModal] = useState(false);
  const { sections } = blog;
  const dispatch = useDispatch();

  // OPEN MODAL
  const handleSection = () => {
    setModal(true);
  };

  const handleNextStep = () => {};

  const handlePrevStep = () => {};
  return (
    <div className="border border-white rounded-2xl max-w-lg mx-auto w-11/12 p-4">
      {/* Blog */}
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-300 mb-6">{description}</p>

      <div className=" flex  gap-4">
        {/* Create Section */}
        <button
          onClick={edit ? handleSection : handleSection}
          className="px-4 py-[6px] bg-indigo-600 text-white rounded cursor-pointer"
        >
          {edit ? "edit" : "Create Section"}
        </button>

        {/* RETURN TO CREATE */}
        {edit && (
          <button
            onClick={() => dispatch(setEdit(false))}
            className="px-4 py-[6px] bg-indigo-600 text-white rounded cursor-pointer"
          >
            Return to Create Section
          </button>
        )}
      </div>

      {/* Sections Preview */}
      <SectionPreview sections={sections} blogId={blogId} />

      <div className="mt-8 flex justify-between max-w-lg mx-auto">
        {/* PREV */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
      px-4 py-2
      rounded-lg
      border border-gray-300
      text-gray-800
      bg-white
      hover:bg-gray-100
      cursor-pointer
    "
          onClick={() => {
            console.log("PREV STEP");
            // handlePrevStep()
          }}
        >
          ← Prev Step
        </motion.button>

        {/* NEXT */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
      px-5 py-2
      rounded-lg
      bg-indigo-600
      text-white
      hover:bg-indigo-700
      cursor-pointer
      shadow-md
    "
          onClick={() => {
            console.log("NEXT STEP");
            // handleNextStep()
          }}
        >
          Next Step →
        </motion.button>
      </div>

      {/* MODAL */}
      {modal && <SectionModal setModal={setModal} blogId={blogId} />}
    </div>
  );
};

export default BlogContent;
