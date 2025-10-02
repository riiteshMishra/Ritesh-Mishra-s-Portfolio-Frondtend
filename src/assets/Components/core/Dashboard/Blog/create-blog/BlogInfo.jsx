import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../../../../../services/operations/auth";
import Thumbnail from "./Thumbnail";

const BlogInfo = () => {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.table(data);
    // TODO: dispatch to Redux or move to next step
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getAllCategories();
        console.log("categories", categories);
        setCategories(categories); // agar state me store karna ho
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
        {/* <label className="flex flex-col">
          <span>Thumbnail</span>
          <input
            type="file"
            {...register("thumbnail", { required: "Thumbnail is required" })}
            className=" FormStyle"
          />
          {errors.thumbnail && (
            <span className="text-red-500">{errors.thumbnail.message}</span>
          )}
        </label> */}
        <Thumbnail setValue={setValue} register={register} />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
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
