import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";

const AnimatedNoReview = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fadeIn">
      {/* Illustration Circle */}
      <div className="relative">
        <div className="w-28 h-28 bg-[#1c1c1c] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.08)] animate-pulse">
          <FaRegSmileBeam className="text-5xl text-yellow-300" />
        </div>
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-white mt-6">No Reviews Yet</h2>

      <p className="text-gray-400 mt-2 text-center max-w-sm">
        There are currently no pending reviews. Once users submit new reviews,
        they will appear here.
      </p>
    </div>
  );
};

export default AnimatedNoReview;
