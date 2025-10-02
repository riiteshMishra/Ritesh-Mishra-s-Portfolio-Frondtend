import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../../../../../../services/operations/auth";
import toast from "react-hot-toast";
import { setBlog, setStep } from "../../../../../../slices/blog";

const BlogStatus = () => {
  const { blog } = useSelector((state) => state.blog);
  //   const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isPublished, setIsPublished] = useState(blog?.isPublished || false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setIsPublished(e.target.checked);
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    if (!blog?._id) {
      toast.error("Blog ID not found!");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("blogId", blog._id);
    data.append("isPublished", isPublished);

    const result = await updateBlog(data);
    dispatch(setStep(1));
    dispatch(setBlog(null));
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={handlePublish} className="flex flex-col gap-4">
        <label className="flex gap-4 items-center bg-[#ffffff1c] p-2 rounded cursor-pointer">
          <input
            type="checkbox"
            name="checkbox"
            className="h-5 w-5"
            onChange={handleChange}
            checked={isPublished}
          />
          <p className="text-xl">Make this blog published</p>
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogStatus;
