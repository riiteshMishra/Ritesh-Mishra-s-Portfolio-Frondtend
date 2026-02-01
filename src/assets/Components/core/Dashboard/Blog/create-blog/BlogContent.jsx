import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionModal from "./SectionModal";
import SectionPreview from "./SectionPreview";
import { createSection } from "../../../../../../services/operations/section";
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

  return (
    <div className="bg-white/30 max-w-[1080px] mx-auto w-11/12 p-4">
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

      {/* MODAL */}
      {modal && <SectionModal setModal={setModal} blogId={blogId} />}
    </div>
  );
};

export default BlogContent;
