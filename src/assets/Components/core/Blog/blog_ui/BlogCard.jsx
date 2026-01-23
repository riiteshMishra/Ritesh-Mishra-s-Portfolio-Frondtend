import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  if (!blog) return null;

  const { title, content, tags, author, createdAt, likes, comments } = blog;

  return (
    <div
      onClick={() => navigate(`blog/${blog?._id}`)}
      className="
        cursor-pointer rounded-xl
        border border-gray-200
        bg-[#B4C699] p-5
        transition-all duration-200
        hover:border-indigo-300 hover:shadow-lg 
      "
    >
      {/* Title */}
      <h2 className="mb-2 text-xl font-semibold text-gray-900">{title}</h2>

      {/* Meta info */}
      <div className="mb-3 text-sm text-gray-500">
        <span className="font-medium text-gray-800">{author?.email}</span>
        <span className="mx-2">•</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>

      {/* Content */}
      <p className="mb-4 text-gray-800 line-clamp-3 leading-relaxed">
        {content}
      </p>

      {/* Tags */}
      {tags?.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                rounded-full
                bg-indigo-50
                px-3 py-1
                text-xs font-medium
                text-indigo-600
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-500">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            👍 {likes?.length || 0}
          </span>
          <span className="flex items-center gap-1">
            💬 {comments?.length || 0}
          </span>
        </div>

        <span className="font-medium text-indigo-600">Read more →</span>
      </div>
    </div>
  );
};

export default BlogCard;
