import React from "react";

const CategoriesNotFound = ({ setCreate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
      {/* Icon / Emoji */}
      <div className="text-5xl">📂</div>

      {/* Heading */}
      <h3 className="text-xl font-semibold text-gray-200">
        No Categories Found
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 max-w-md">
        You haven’t created any categories yet. Start by creating a new category
        to organize your content.
      </p>

      {/* Action Hint */}
      <div className="text-xs text-gray-500 cursor-pointer ">
        Tip: Click on{" "}
        <span className="text-blue-400" onClick={() => setCreate(true)}>
          “Create Category”
        </span>{" "}
        to get started
      </div>
    </div>
  );
};

export default CategoriesNotFound;
