import React from "react";
import EmptyProject from "./EmptyProject";
import ImagePreview from "./ImagePreview";

const ImageView = ({image}) => {
  return (
    <div className="sm:w-[400px] sm:h-[200px] h-[180px] w-[350px]">
      {image ? <ImagePreview image={image}/> : <EmptyProject />}
    </div>
  );
};

export default ImageView;
