import React, { useEffect, useState } from "react";
import {
  getNonApprovedReviews,
  toggleReview,
} from "../../../../../services/operations/reviews";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loader from "../../../common/Loader";
import AnimatedNoReview from "./AnimatedNoReview";
import EmptyUserReviews from "../../../common/fallback_ui/UserReviews";

const NonApprovedReviews = () => {
  const [loading, setLoading] = useState(false);
  const [approveLoadingId, setApproveLoadingId] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // FETCH DATA
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const result = await getNonApprovedReviews(token, dispatch);
        setReviews(result || []);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [token]);

  // APPROVE HANDLER
  const handleApprove = async (reviewId) => {
    try {
      setApproveLoadingId(reviewId);
      await toggleReview(token, reviewId);

      setReviews((prev) => prev.filter((r) => r._id !== reviewId));
      toast.success("Review Approved");
    } catch (err) {
      console.log(err);
    } finally {
      setApproveLoadingId(null);
    }
  };

  return (
    <section className="min-h-[70vh] text-white p-4">
      {/*  Loader */}
      {loading && (
        <div className="w-full flex justify-center py-10 relative overflow-hidden">
          <Loader />
        </div>
      )}

      {/*  Empty State */}
      {!loading && reviews.length === 0 && <EmptyUserReviews />}

      {/*  Review Cards */}
      <div className="grid gap-6 mt-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-[#1e1e1e] p-5 rounded-lg shadow-md border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {/* image */}
              <img
                src={review.image}
                alt="user"
                className="w-16 h-16 rounded-full object-cover border"
              />

              {/* name + email */}
              <div>
                <h2 className="text-xl font-semibold">
                  {review.firstName} {review.lastName}
                </h2>
                <p className="text-gray-400">{review.email}</p>
              </div>
            </div>

            {/* rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            {/* comment */}
            <p className="mt-3 text-gray-300 leading-relaxed">
              {review.comment}
            </p>

            {/* project */}
            <div className="mt-3">
              <p className="text-gray-400 text-sm">Project:</p>
              <a
                href={review.projectLink}
                target="_blank"
                className="text-blue-400 underline hover:text-blue-300 transition"
              >
                {review.projectName}
              </a>
            </div>

            {/* approve button */}
            <button
              onClick={() => handleApprove(review._id)}
              className="mt-5 px-5 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white transition-all cursor-pointer shadow-md"
              disabled={approveLoadingId === review._id}
            >
              {approveLoadingId === review._id ? "Updating..." : "Approve"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NonApprovedReviews;
