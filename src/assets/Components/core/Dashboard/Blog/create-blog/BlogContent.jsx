import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionModal from "./SectionModal";
import SectionPreview from "./SectionPreview";
import { createSection } from "../../../../../../services/operations/section";

const BlogContent = () => {
  const { blog } = useSelector((state) => state.blog);
  const { title, description, _id: blogId } = blog || {};
  const [modal, setModal] = useState(false);
  const { sections } = blog;

  // OPEN MODAL
  const handleSection = () => {
    setModal(true);
  };

  return (
    <div className="bg-white/30 max-w-[1080px] mx-auto w-11/12 p-4">
      {/* Blog */}
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-300 mb-6">{description}</p>

      {/* Create Section */}
      <button
        onClick={handleSection}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Create Section
      </button>

      {/* Sections Preview */}
      <SectionPreview sections={sections} blogId={blogId} />

      {/* MODAL */}
      {modal && <SectionModal setModal={setModal} blogId={blogId} />}
    </div>
  );
};

export default BlogContent;
