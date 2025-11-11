import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import Loader from "../../common/Loader";

const SwiperComponent = ({ reviews, loading }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  // review value mount krte hain yaha se
  if (!reviews) return;
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1080px] h-full relative overflow-hidden">
        {loading ? (
          <Loader />
        ) : (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper h-full"
          >
            {/* yaha pr backend se review fetch krke lagana hai */}

            {reviews.map((review) => (
              <SwiperSlide key={review?._id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
            <div className="flex flex-col justify-between items-center text-center h-[300px] sm:h-[400px] md:h-[400px] bg-gray-800 text-white rounded-2xl shadow-xl p-6 md:p-10">
              {" "}
              item 1
            </div>
          </SwiperSlide>
  */}

            {/* Progress Circle */}
            <div
              className="autoplay-progress absolute right-4 bottom-4 z-10 flex items-center justify-center"
              slot="container-end"
            >
              <svg
                viewBox="0 0 48 48"
                ref={progressCircle}
                className="w-10 h-10 text-white opacity-80"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  style={{
                    strokeDasharray: "125.6",
                    strokeDashoffset: "calc(125.6 * var(--progress))",
                    transition: "stroke-dashoffset 0.25s linear",
                  }}
                ></circle>
              </svg>
              <span
                ref={progressContent}
                className="absolute text-sm text-white font-semibold"
              ></span>
            </div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default SwiperComponent;
