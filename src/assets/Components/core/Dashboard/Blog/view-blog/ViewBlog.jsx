import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogById,
  toggleBlogLike,
} from "../../../../../../services/operations/blog";
import { FaComment, FaRegHeart, FaHeart } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { BiCommentDetail } from "react-icons/bi";
import CommentModal from "./CommentModal";
import CommentUi from "./CommentUi";

const ViewBlog = () => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  const { blogId } = useParams();
  const { user } = useSelector((state) => state.profile);
  const [commentModal, setCommentModal] = useState(false);
  const navigate = useNavigate();

  // fetch blog details
  const fetchBlog = async () => {
    setLoading(true);
    try {
      const result = await getBlogById(blogId);
      setBlogData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  //  toggle like functionality
  const blogLikeToggle = async () => {
    if (!user) return navigate("/login");
    setLikeLoading(true);
    try {
      const response = await toggleBlogLike(user._id, blogId);
      const isLiked = response.liked;

      // Local state update after toggling like
      setBlogData((prev) => {
        if (!prev) return prev;

        // Copy previous likes & update based on action
        const updatedLikes = isLiked
          ? prev.likes.filter((id) => id !== user._id)
          : [...prev.likes, user._id];

        return {
          ...prev,
          likes: updatedLikes,
        };
      });

      //  Instant UI feedback for like icon
      setUserLiked((prev) => !prev);
    } catch (err) {
      console.log(err);
    } finally {
      setLikeLoading(false);
    }
  };

  //  check if user already liked (runs after blogData updates)
  useEffect(() => {
    if (blogData && user) {
      setUserLiked(blogData.likes?.includes(user._id));
    }
  }, [blogData, user]);

  //  Loading / Not Found UI
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400 text-lg">
        Loading blog details...
      </div>
    );

  if (!blogData)
    return (
      <div className="flex justify-center items-center h-screen text-red-400 text-lg">
        Blog not found 😔
      </div>
    );
  // console.log("blogData.comments", blogData.comments);
  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white py-10 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Thumbnail */}
        <div className="overflow-hidden rounded-2xl shadow-lg relative">
          <img
            src={blogData.thumbnail}
            alt={blogData.title}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Like button */}
          <button
            onClick={blogLikeToggle}
            disabled={likeLoading}
            className="absolute top-5 right-5 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            {userLiked ? (
              <FaHeart className="text-red-500 text-xl transition-transform duration-300 transform scale-110" />
            ) : (
              <FaRegHeart className="text-gray-300 text-xl hover:text-red-400" />
            )}
          </button>

          <button
            className="absolute bottom-5 right-5 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
            onClick={() => setCommentModal((prev) => !prev)}
          >
            <BiCommentDetail className=" text-xl transition-transform duration-300 transform scale-110" />
          </button>
        </div>

        {/* Blog Info */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 capitalize">
            {blogData.title}
          </h1>
          <div className="flex flex-wrap items-center text-gray-400 text-sm gap-4 mb-4">
            <span>
              By{" "}
              <span className="text-blue-400 font-medium">
                {blogData.author?.firstName} {blogData.author?.lastName}
              </span>
            </span>
            <span>•</span>
            <span>
              {new Date(blogData.createdAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="text-green-400">
              {blogData.isPublished ? "Published" : "Draft"}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blogData.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gray-800 rounded-full border border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="text-gray-300 leading-relaxed text-[17px]">
            {blogData.content}
          </div>

          {/* Likes & Comments */}
          <div className="flex justify-between items-center mt-10 text-gray-400 text-sm border-t border-gray-800 pt-4">
            <span className="flex items-center gap-2">
              <BiSolidLike /> {blogData.likes?.length || 0} Likes
            </span>
            <span className="flex items-center gap-2">
              <FaComment /> {blogData.comments?.length || 0} Comments
            </span>
          </div>
        </div>
      </div>

      <div className="my-4">
        <CommentUi comments={blogData.comments} />
      </div>
      {commentModal && (
        <CommentModal setCommentModal={setCommentModal} blogId={blogId} />
      )}
    </section>
  );
};

export default ViewBlog;
