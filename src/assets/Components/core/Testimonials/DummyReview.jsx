import React from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const DummyReview = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const clickHandler = () => {
    if (!user) return navigate("/login");
    navigate("/dashboard/write-review");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white md:px-50 md:py-10 border-[1px] rounded-2xl border-gray-600 p-8">
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-4xl shadow-xl">
          <FaStar className="text-amber-400" />
        </div>

        <h2 className="text-3xl font-semibold text-center">No Reviews Yet</h2>

        <p className="text-gray-300 text-center max-w-sm leading-relaxed text-lg">
          There are no reviews for this Developer.
          <br /> Be the first one to leave a review!
        </p>

        <button
          onClick={clickHandler}
          className="mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default DummyReview;
