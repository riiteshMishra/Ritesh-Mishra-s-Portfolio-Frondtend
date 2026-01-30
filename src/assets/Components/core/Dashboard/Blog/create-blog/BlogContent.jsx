import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SectionModal from "./SectionModal";

import SectionPreview from "./SectionPreview";

const BlogContent = () => {
  const { blog } = useSelector((state) => state.blog);
  const { title, content } = blog || {};

  const sectionTitleRef = useRef();

  const [modal, setModal] = useState(false);
  const [sections, setSections] = useState([]);

  const handleSection = () => {
    setModal(true);
  };

  return (
    <div className="bg-white/30 max-w-[1080px] mx-auto w-11/12 p-4">
      {/* Blog */}
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-300 mb-6">{content}</p>

      {/* Create Section */}
      <button
        onClick={handleSection}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Create Section
      </button>

      {/* Sections Preview */}
      <SectionPreview sections={sections} />

      {/* MODAL */}
      {modal && (
        <SectionModal
          setSections={setSections}
          setModal={setModal}
          sectionTitleRef={sectionTitleRef}
        />
      )}
    </div>
  );
};

export default BlogContent;
