import { useEffect, useState } from "react";
import { adminBlogs } from "../../../../../../services/operations/auth";
import { FiCheck, FiX } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyMyBlogs from "../../../../common/fallback_ui/Myblogs";
import Loader from "../../../../common/Loader";
import { motion } from "framer-motion";

/* ================= MOTION VARIANTS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* ================= COMPONENT ================= */

const MyBlog = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Fetch blogs
  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        setLoading(true);
        const result = await adminBlogs(token);
        setMyBlogs(result);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setMyBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBlogs();
  }, [token]);

  return (
    <section className="text-white py-8">
      <div className="max-w-[1150px] mx-auto px-4">
        {/* ================= STATES ================= */}
        {loading ? (
          <Loader />
        ) : myBlogs?.length === 0 ? (
          <EmptyMyBlogs />
        ) : (
          /* ================= BLOG GRID ================= */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {myBlogs.map((blog) => (
              <motion.div
                key={blog?._id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="
                  bg-gray-800 hover:bg-gray-700
                  rounded-xl shadow-lg
                  overflow-hidden group
                  max-h-[480px] flex flex-col
                "
                onClick={() => navigate(`/blogs/blog/${blog?._id}`)}
              >
                {/* ================= THUMBNAIL ================= */}
                <div className="relative">
                  <img
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    className="
                      w-full h-56 object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* STATUS + EDIT */}
                  <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/60 px-2 py-1 rounded-md text-sm">
                    {blog?.isPublished ? (
                      <>
                        <FiCheck className="text-green-500 text-lg" />
                        <span className="text-green-400">Published</span>
                      </>
                    ) : (
                      <>
                        <FiX className="text-red-500 text-lg" />
                        <span className="text-red-400">Draft</span>
                      </>
                    )}

                    <Link
                      to={`/dashboard/update-blog/${blog?._id}`}
                      className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition"
                    >
                      <BiSolidEditAlt />
                      <span className="hidden sm:inline">Edit</span>
                    </Link>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold mb-1 group-hover:text-amber-400 transition capitalize">
                    {blog?.title}
                  </h2>

                  <p className="text-xs text-gray-400 mb-2 truncate">
                    {blog?.slug}
                  </p>

                  <p className="text-sm text-gray-300 line-clamp-3 mb-4 capitalize">
                    {blog?.description
                      ? `${blog.description.substring(0, 80)}...`
                      : "No description available."}
                  </p>

                  {/* ================= FOOTER ================= */}
                  <div className="mt-auto flex justify-between text-sm text-gray-300">
                    <p>
                      Likes:{" "}
                      <span className="font-medium">
                        {blog?.likes?.length ?? 0}
                      </span>
                    </p>
                    <p>
                      Comments:{" "}
                      <span className="font-medium">
                        {blog?.comments?.length ?? 0}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MyBlog;
