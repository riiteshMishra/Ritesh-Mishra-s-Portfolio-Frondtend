import ReactStars from "react-rating-stars-component";
import { ImStarEmpty } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createReview,
  getClientReview,
  updateReview,
} from "../../../../../services/operations/reviews";
import { setReviewLoading } from "../../../../../slices/review";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const { token } = useSelector((state) => state.auth);
  const { editReview } = useSelector((state) => state.review);
  const [starValue, setStarValue] = useState(0);
  const { singleReview } = useSelector((state) => state.review);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reviewLoading } = useSelector((state) => state.review);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      projectName: "",
      projectLink: "",
      comment: "",
      rating: 0,
    },
  });

  //  jab edit kr rhe ho to
  useEffect(() => {
    if (editReview && singleReview) {
      reset({
        projectName: singleReview.projectName,
        projectLink: singleReview.projectLink,
        comment: singleReview.comment,
        rating: singleReview.rating,
      });
      setStarValue(singleReview.rating);
    }
  }, [editReview, singleReview, reset]);

  // ⭐ Rating change handler
  const ratingChanged = (newRating) => {
    setStarValue(newRating);
    setValue("rating", newRating);
  };

  // Submit handler
  const submitHandler = async (data) => {
    // star value
    if (starValue === 0)
      return toast.error("Please give a star rating before submitting");

    // review create krne ke liye
    if (!editReview) {
      const formData = new FormData();
      formData.append("projectName", data.projectName);
      formData.append("projectLink", data.projectLink);
      formData.append("comment", data.comment);
      formData.append("rating", starValue);

      try {
        dispatch(setReviewLoading(true));
        await createReview(formData, token, dispatch);
      } catch (err) {
        console.log("error in submit handler", err);
      } finally {
        dispatch(setReviewLoading(false));
        setStarValue(0);
        reset();
      }
    } else {
      // review update krne ke liye
      const formData = new FormData();
      formData.append("projectName", data.projectName);
      formData.append("projectLink", data.projectLink);
      formData.append("comment", data.comment);
      formData.append("rating", starValue);
      formData.append("reviewId", singleReview?._id);
      // api call
      try {
        dispatch(setReviewLoading(true));
        await updateReview(formData, token, dispatch);
      } catch (err) {
        toast.error(err.message);
      } finally {
        dispatch(setReviewLoading(false));
        setStarValue(0);
        navigate("/dashboard/write-review");
      }
    }
  };
  return (
    <form
      className="flex flex-col gap-4 text-white"
      onSubmit={handleSubmit(submitHandler)}
    >
      {/* ⭐ React Stars */}
      <label className="flex flex-col items-center my-5">
        <p className="text-[clamp(1rem,3vw,3rem)] mb-2 text-gray-400">Stars</p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          color="#d7fc03"
          activeColor="#f0fc03"
          edit={true}
          filledIcon={<FaStar />}
          emptyIcon={<ImStarEmpty />}
          defaultValue={2}
        />
      </label>

      {/* Project name */}
      <label className="flex flex-col gap-y-4">
        <p className="text-[clamp(1rem,2.4vw,3rem)]">Project name</p>
        <input
          type="text"
          className="form-style"
          {...register("projectName", { required: "Project name is required" })}
          placeholder="e.g. Portfolio Website, E-commerce Store, or Travel App"
        />
        {errors.projectName && (
          <span className="text-red-400 text-sm">
            {errors.projectName.message}
          </span>
        )}
      </label>

      {/* Project link */}
      <label className="flex flex-col gap-y-4">
        <p className="text-[clamp(1rem,2.4vw,3rem)]">Project link</p>
        <input
          type="url"
          className="form-style"
          {...register("projectLink", { required: "Project link is required" })}
          placeholder="https://myproject.com"
        />
        {errors.projectLink && (
          <span className="text-red-400 text-sm">
            {errors.projectLink.message}
          </span>
        )}
      </label>

      {/* Comment */}
      <label className="flex flex-col gap-y-4">
        <p className="text-[clamp(1rem,2.4vw,3rem)]">Comment</p>
        <textarea
          className="form-style resize-none"
          rows="5"
          placeholder="Write your honest review here..."
          {...register("comment", { required: "Comment is required" })}
        ></textarea>
        {errors.comment && (
          <span className="text-red-400 text-sm">{errors.comment.message}</span>
        )}
      </label>

      {/* Hidden rating field */}
      <input type="hidden" {...register("rating")} value={starValue} />

      {/*  Submit Button */}
      <button
        disabled={reviewLoading}
        type="submit"
        className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-md px-4 py-2 
           font-medium shadow-md hover:shadow-xl 
           active:scale-95 transition-all duration-200 ease-in-out 
           cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-60"
      >
        {reviewLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ReviewForm;
