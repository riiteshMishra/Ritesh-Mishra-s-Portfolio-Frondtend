import { SwiperSlide } from "swiper/react";
import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {
    firstName,
    lastName,
    image,
    projectLink,
    projectName,
    rating,
    comment,
  } = review;

  return (
    <div className="flex flex-col justify-between items-center text-center h-[300px] sm:h-[400px] md:h-[400px] bg-gray-800 text-white rounded-2xl shadow-xl p-6 md:p-10">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
        <h3 className="text-lg md:text-xl font-semibold capitalize">
          {firstName} {lastName}
        </h3>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 text-lg" />
          ))}
        </div>
      </div>

      {/* Comment Section */}
      <p className="text-sm md:text-base italic text-blue-100 mt-4 max-w-[90%]">
        “{comment?.length > 100 ? comment.substring(0, 100) + "..." : comment}”
      </p>

      {/* Project Info */}
      <div className="mt-5">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base underline text-blue-100 hover:text-white transition-all duration-200"
        >
          🔗 {projectName}
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
