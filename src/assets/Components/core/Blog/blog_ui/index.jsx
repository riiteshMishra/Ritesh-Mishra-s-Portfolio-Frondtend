import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogUi = ({ blogs }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5  place-items-center mx-auto">
      {blogs.map((blog) => (
        <BlogCard key={blog?._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogUi;
