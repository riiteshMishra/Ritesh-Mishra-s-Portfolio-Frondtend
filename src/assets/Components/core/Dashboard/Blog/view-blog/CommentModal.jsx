import React from "react";

const CommentModal = ({ setCommentModal }) => {
  //TODO: YAHA PR COMMENT API CALL KR KE UI SHOW KRNA HAI
  return (
    <div
      onClick={() => setCommentModal(false)}
      className=" absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm grid place-content-center z-30 scroll-smooth"
    >
      <div
        className="h-[clamp(300px,50vh,600px)] bg-black/50 w-[clamp(300px,50vw,600px)] rounded-xl border-[1px] border-black"
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
};

export default CommentModal;
