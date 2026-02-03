import React from "react";

const CommentUi = ({ comments }) => {
  return (
    <section className="container ">
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {comments?.map((comment) => (
          <div
            key={comment?._id}
            className="flex items-start gap-4 p-4 border-b border-gray-700"
          >
            {/* User avatar placeholder */}
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
              {comment?.user?.firstName[0]?.toUpperCase()}
            </div>

            {/* Comment content */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-white">
                  {comment?.user?.firstName} {comment?.user?.lastName}
                </h4>
                <span className="text-gray-400 text-xs">
                  {new Date(comment?.createdAt)?.toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-gray-300 mt-1">{comment?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentUi;
