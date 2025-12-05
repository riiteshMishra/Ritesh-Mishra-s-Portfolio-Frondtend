import React from "react";

const ImagePreview = ({ image }) => {
  if (!image) return null;

  return (
    <img
      src={image}
      alt="project-thumbnail"
      title="thumbnail"
      className="w-full h-full object-cover rounded-xl shadow-lg cursor-pointer"
    />
  );
};

export default ImagePreview;
