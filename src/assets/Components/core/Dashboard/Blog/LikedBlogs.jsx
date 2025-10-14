import React, { useEffect, useState } from "react";
import { getAllLikedBlogs } from "../../../../../services/operations/blog";
import Loader from "../../../common/Loader";
import { FaHeart, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const LikedBlogs = () => {
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLikedBlogs = async () => {
      setLoading(true);
      const result = await getAllLikedBlogs();
      setLikedBlogs(result);
      setLoading(false);
    };
    fetchLikedBlogs();
  }, []);

  return (
    <section className="min-h-screen py-10 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-10 flex justify-center items-center gap-2 drop-shadow-lg">
          <FaHeart className="text-red-400 animate-pulse" /> Your Liked Blogs
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <Loader />
          </div>
        ) : likedBlogs.length === 0 ? (
          <div className="text-center text-white text-lg mt-20 drop-shadow-md">
            You haven’t liked any blogs yet.
            <br />
            <span className="font-semibold text-pink-200">
              Go explore and like some awesome posts!
            </span>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {likedBlogs.map((blog, idx) => (
              <Link
                key={idx}
                to={`/blogs/blog/${blog._id}`}
                className="relative bg-black/10 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:-translate-y-1 capitalize h-fit w-fit"
              >
                {/* Author Badge Top-Left */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                  <img
                    src={blog.author.image}
                    alt={blog.author.firstName}
                    className="w-6 h-6 rounded-full object-cover border border-white/30"
                  />
                  <span className="text-white text-sm font-medium">
                    {blog.author.firstName} {blog.author.lastName}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="max-h-[500px]">
                  <div className="max-w-[400px]">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-full rounded object-cover"
                    />
                  </div>
                </div>

                {/* Title & Content */}
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2 hover:text-yellow-200 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-100 text-sm line-clamp-3">
                      {blog.content}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex justify-between items-center">
                    <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded-full transition-all duration-300">
                      <FaBookOpen /> Read More
                    </button>
                    <FaHeart className="text-red-400 text-lg hover:scale-110 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LikedBlogs;
