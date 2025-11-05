import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { setEditReview } from "../../../../../slices/review";
const ReviewCard = () => {
  const { singleReview } = useSelector((state) => state.review);
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

      {/* Review Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto place-content-center ">
        {singleReview && (
          <div
            key={singleReview?._id}
            className="bg-[#1e293b]/40 backdrop-blur-md rounded-xl shadow-md border border-white/10 hover:scale-[1.02] transition-transform duration-300 p-4 relative"
          >
            {/* Top section with profile */}
            <div className="flex items-center gap-4 mb-3 flex-col md:flex-row">
              <img
                src={singleReview?.image}
                alt={singleReview?.firstName}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <h3 className="text-white font-semibold capitalize">
                  {singleReview?.firstName} {singleReview?.lastName}
                </h3>
                <p className="text-xs text-gray-400">{singleReview?.email}</p>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < singleReview?.rating
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-200 text-sm italic mb-4">
              "{singleReview?.comment}"
            </p>

            {/* Project Details */}
            <div className="text-sm">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Project:</span>{" "}
                {singleReview?.projectName}
              </p>
              <a
                href={singleReview?.projectLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline text-sm hover:text-blue-300"
              >
                Visit Project
              </a>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4">
              {new Date(singleReview?.createdAt).toLocaleDateString()}
            </p>

            <div className="flex items-center justify-between">
              {/* Approval badge */}
              <div
                className={`mt-2 text-xs font-semibold ${
                  singleReview?.isApproved ? "text-green-400" : "text-red-400"
                }`}
              >
                {singleReview?.isApproved ? "Approved" : "Pending"}
              </div>

              {/* Edit review */}
              <button
                onClick={clickHandler}
                className="sm:absolute static bottom-5 right-5 flex items-center gap-2 text-white text-sm cursor-pointer hover:text-yellow-300 transition-colors duration-200 my-1 "
                title="Edit your review"
              >
                <FiEdit2 className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewCard;
