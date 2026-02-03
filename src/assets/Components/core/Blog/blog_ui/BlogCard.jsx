import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BlogImg from "./BlogImg";
import { AiTwotoneLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  if (!blog) return null;

  const {
    title,
    contents,
    tags,
    author,
    createdAt,
    likes,
    comments,
    description,
  } = blog;

  return (
    <div
      onClick={() => navigate(`blog/${blog?._id}`)}
      className="
        cursor-pointer rounded-xl
        border border-gray-200
        bg-[#B4C699] p-5
        transition-all duration-200
        hover:border-indigo-300 hover:shadow-lg 
          min-h-[300px]
         w-11/12 max-w-90
      "
    >
      {/* image */}
      <BlogImg image={blog?.image} />
      {/* Title */}
      <h2 className="mb-1 text-[15px] font-semibold text-gray-900 capitalize">
        {title.length > 30 ? `${title.slice(0, 30)}...` : title}
      </h2>
      {/* Meta info */}
      <div className="sr-only">
        <span>{author?.email}</span>
        <span>•</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>sp
      </div>
      {/* Content */}
      <p className="mb-3 text-gray-800 line-clamp-3 leading-relaxed text-[14px]">
        {description?.length > 50
          ? `${description.slice(0, 50)}...`
          : description}
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
      <motion.div
        className="flex items-center justify-between border-t pt-3 text-sm text-gray-500"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Left: likes & comments */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.span
            className="flex items-center gap-1 cursor-pointer text-gray-800 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiTwotoneLike fontSize={18} />
            {likes?.length || 0}
          </motion.span>

          <motion.span
            className="flex items-center gap-1 cursor-pointer text-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GoComment fontSize={18} />
            {comments?.length || 0}
          </motion.span>
        </motion.div>

        {/* Right: read more */}
        <motion.span
          className="font-medium text-indigo-600 cursor-pointer"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Read more →
        </motion.span>
      </motion.div>
    </div>
  );
};

export default BlogCard;
