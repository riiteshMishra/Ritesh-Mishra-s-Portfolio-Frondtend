import React, { useEffect, useState, useRef } from "react";
import { fetchAllBlogs } from "../../services/operations/auth";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaComment } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        setLoading(true);
        const result = await fetchAllBlogs();
        setBlogs(result);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedBlogs();
  }, []);

  // 🔹 GSAP animation for loading text
  useEffect(() => {
    if (loading && loadingRef.current) {
      gsap.to(loadingRef.current, {
        opacity: 0.3,
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    } else {
      gsap.killTweensOf(loadingRef.current);
      if (loadingRef.current) {
        gsap.set(loadingRef.current, { opacity: 1, scale: 1 });
      }
    }
  }, [loading]);

  return (
    <section className="ProjectPage">
      <div className="max-w-[1300px] mx-auto p-6 rounded-lg">
        <h1 className="text-center text-6xl Bebas">Blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          {loading ? (
            <div
              ref={loadingRef}
              className="col-span-full text-center text-4xl Bebas font-semibold text-amber-400"
            >
              Loading...
            </div>
          ) : blogs.length === 0 ? (
            <div className="col-span-full text-center text-4xl text-gray-300">
              Currently we don’t have any blogs
            </div>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog?._id}
                className="bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => navigate(`blog/${blog?._id}`)}
              >
                {/* Thumbnail */}
                <img
                  src={blog?.thumbnail}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />

                {/* Blog details */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog?.title}</h2>
                  <p className="text-sm text-gray-400 mb-2">{blog?.slug}</p>

                  {/* substring to limit content preview */}
                  <p className="text-sm text-gray-300 mb-3">
                    {blog?.content
                      ? blog.content.substring(0, 100) + "..."
                      : "No description available."}
                  </p>

                  {/* Likes & Comments */}
                  <div className="flex items-center gap-6 text-gray-300">
                    <div className="flex items-center gap-1">
                      <FaHeart className="text-red-500" />
                      <span>{blog?.likes?.length ?? 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaComment className="text-blue-400" />
                      <span>{blog?.comments?.length ?? 0}</span>
                    </div>
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

export default Blogs;
