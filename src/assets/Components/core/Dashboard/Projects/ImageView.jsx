import React from "react";
import EmptyProject from "./EmptyProject";
import ImagePreview from "./ImagePreview";

const ImageView = ({image}) => {
  return (
    <div className="sm:max-w-[400px] sm:max-h-[200px] h-[180px] w-[350px]">
      {image ? <ImagePreview image={image}/> : <EmptyProject />}
    </div>
  );
};

export default ImageView;
