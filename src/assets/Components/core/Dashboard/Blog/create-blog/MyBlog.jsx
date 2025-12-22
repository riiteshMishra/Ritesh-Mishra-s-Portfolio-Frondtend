import { useEffect, useState } from "react";
import { adminBlogs } from "../../../../../../services/operations/auth";
import { FiCheck, FiX } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyMyBlogs from "../../../../common/fallback_ui/Myblogs";
import Loader from "../../../../common/Loader";

const MyBlog = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Fetch user blogs on mount
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
  }, []);
  return (
    <section className="text-white py-8">
      <div className="max-w-[1150px] mx-auto px-4 relative overflow-hidden">
        {/* Blogs container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {loading ? (
            <Loader />
          ) : myBlogs?.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-400">
              <EmptyMyBlogs />
            </div>
          ) : (
            myBlogs?.map((blog) => (
              <div
                key={blog?._id}
                className="bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-lg overflow-hidden group"
              >
                {/* Thumbnail with status + edit */}
                <div className="relative">
                  <img
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    className="w-full h-60 object-cover"
                  />

                  {/* Status + Edit */}
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

                    {/* Edit link */}
                    <Link
                      to={`/dashboard/update-blog/${blog?._id}`}
                      className="flex items-center gap-1 text-gray-300 hover:text-amber-400 hover:scale-110 transition"
                      onClick={() => navigate("dashboard/create-blog")}
                    >
                      <BiSolidEditAlt />
                      <span className="hidden sm:inline">Edit</span>
                    </Link>
                  </div>
                </div>

                {/* Blog details */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1 group-hover:text-amber-400 transition capitalize">
                    {blog?.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-2">{blog?.slug}</p>

                  <p className="text-sm text-gray-300 line-clamp-3 mb-4 capitalize">
                    {`${blog?.content.substring(0, 50)}...` ||
                      "No description available."}
                  </p>

                  {/* Likes & Comments */}
                  <div className="flex justify-between text-sm text-gray-300">
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
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBlog;
