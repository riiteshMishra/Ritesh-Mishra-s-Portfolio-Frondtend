import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createBlog,
  getAllCategories,
} from "../../../../../../services/operations/auth";
import Thumbnail from "./Thumbnail";
import { useDispatch, useSelector } from "react-redux";
import { setBlog, setStep } from "../../../../../../slices/blog";
import Tags from "./Tags";
import { useNavigate } from "react-router-dom";

const BlogInfo = () => {
  const { token } = useSelector((state) => state.auth);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    // console.table(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("categoryId", data.categoryId);
    formData.append("content", data.content);
    formData.append("thumbnail", data.thumbnail);
    formData.append("tags", data.tags);
    const blog = await createBlog(formData, token);
    dispatch(setBlog(blog));
    console.log("blog data", blog);
    if (blog) dispatch(setStep(2));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllCategories();
        // console.log("categories", categories);
        setCategories(categories);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mx-auto max-w-[600px] my-4 w-11/12">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Title */}
        <label className="flex flex-col">
          <span>Title</span>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className=" FormStyle"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </label>

        {/* Slug */}
        <label className="flex flex-col">
          <span>Slug</span>
          <input
            type="text"
            {...register("slug", { required: "Slug is required" })}
            className=" FormStyle"
          />
          {errors.slug && (
            <span className="text-red-500">{errors.slug.message}</span>
          )}
        </label>

        {/* Category */}
        <label className="flex flex-col">
          <span>Category</span>
          <select
            {...register("categoryId", { required: "Category is required" })}
            className=" FormStyle"
          >
            <option value="" className="text-black">
              Select Category
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id} className="text-black">
                {cat.categoryName}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <span className="text-red-500">{errors.categoryId.message}</span>
          )}
        </label>

        {/* Content */}
        <label className="flex flex-col">
          <span>Content</span>
          <textarea
            rows={5}
            {...register("content", { required: "Content is required" })}
            className=" FormStyle"
          />
          {errors.content && (
            <span className="text-red-500">{errors.content.message}</span>
          )}
        </label>

        {/* Thumbnail */}
        <Thumbnail setValue={setValue} register={register} />

        {/* tags */}
        <Tags setValue={setValue} register={register} />

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 cursor-pointer"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default BlogInfo;

// blog info me 5 data dena hai api ko
// title,content,slug,categoryId,thumbnail
