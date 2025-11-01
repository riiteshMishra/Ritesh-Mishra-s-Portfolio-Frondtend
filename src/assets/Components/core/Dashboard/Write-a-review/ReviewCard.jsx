import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { setEditReview } from "../../../../../slices/review";
const ReviewCard = () => {
  const { reviews } = useSelector((state) => state.review);
  // const { setEditReview } = useSelector((state) => state.review);
  console.log("set edit review", setEditReview);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //click handler
  const clickHandler = () => {
    dispatch(setEditReview(true));
    return navigate("/dashboard/edit-review");
  };
  return (
    <section className="max-w-[1100px] mx-auto px-4 py-10">
      <h2 className="text-center text-2xl font-bold text-white mb-8">
        Thanks for your review. We’re improving because of your feedback.
      </h2>

      {/* Agar koi review nahi hai */}
      {(!reviews || reviews.length === 0) && (
        <p className="text-center text-gray-300">No reviews yet </p>
      )}

      {/* Review Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto place-content-center ">
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="bg-[#1e293b]/40 backdrop-blur-md rounded-xl shadow-md  border border-white/10 hover:scale-[1.02] transition-transform duration-300 p-4 relative"
          >
            {/* Top section with profile */}
            <div className="flex items-center gap-4 mb-3 flex-col md:flex-row">
              <img
                src={review.image}
                alt={review.firstName}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <h3 className="text-white font-semibold capitalize">
                  {review.firstName} {review.lastName}
                </h3>
                <p className="text-xs text-gray-400">{review.email}</p>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < review.rating ? "text-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-200 text-sm italic mb-4">
              "{review.comment}"
            </p>

            {/* Project Details */}
            <div className="text-sm">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Project:</span>{" "}
                {review.projectName}
              </p>
              <a
                href={review.projectLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline text-sm hover:text-blue-300"
              >
                Visit Project
              </a>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>

            <div className="flex items-center justify-between">
              {/* Approval badge */}
              <div
                className={`mt-2 text-xs font-semibold ${
                  review.isApproved ? "text-green-400" : "text-red-400"
                }`}
              >
                {review.isApproved ? "Approved" : "Pending"}
              </div>

              {/* edit review  */}
              <button
                onClick={clickHandler}
                className="sm:absolute static bottom-5 right-5 flex items-center gap-2 text-white text-sm cursor-pointer hover:text-yellow-300 transition-colors duration-200 my-1 "
                title="Edit your review"
              >
                <FiEdit2 className="text-lg" />
                {/* <span>Edit Review</span> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewCard;
