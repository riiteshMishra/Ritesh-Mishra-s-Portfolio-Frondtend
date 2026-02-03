import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogUi = ({ blogs }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center md:flex-row flex-wrap gap-6 p-6 container mx-auto">
      {blogs.map((blog) => (
        <BlogCard key={blog?._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogUi;
  