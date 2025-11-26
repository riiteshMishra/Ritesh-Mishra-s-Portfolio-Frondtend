import { SwiperSlide } from "swiper/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { ImStarEmpty } from "react-icons/im";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

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
    <div className="flex flex-col  bg-gray-800 text-white md:px-50 md:py-10 border-[1px] rounded-2xl border-gray-600 p-8 ">
      {/* star  */}
      <ReactStars
        count={5}
        value={rating}
        size={30}
        color="#fff"
        activeColor="#ffd700"
        filledIcon={<FaStar />}
        emptyIcon={<ImStarEmpty />}
        edit={false}
      />

      {/* comment */}
      <p className="my-4">
        {comment.substring().length > 150
          ? `${comment.substring(0, 150)}...`
          : comment}
      </p>

      {/* client project and link */}
      <div className="flex items-center capitalize gap-2 group w-fit mb-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 underline text-blue-400"
        >
          {projectName}
        </a>{" "}
        <FaArrowTrendUp className="text-green-600 group-hover:text-amber-300 group-hover:translate-x-2 transition-all duration-200" />
      </div>

      {/* client and name */}
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 overflow-hidden rounded-full">
          <img
            src={image}
            alt={firstName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" flex flex-col">
          <div className="text-2xl capitalize space-x-3">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>

          <p className="text-right text-green-400 my-2 h-fit w-fit rounded-xl px-4 border-gray-500 border-[1px] text-xs relative py-1 flex">
            Verified
            <AiFillLike className="absolute -right-1 -top-1" fontSize={12} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
