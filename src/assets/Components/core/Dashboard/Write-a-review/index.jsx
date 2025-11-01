import { useSelector } from "react-redux";
import "./index.css";
import ReviewFrom from "./ReviewFrom";
import Loader from "../../../common/Loader";
import ReviewCard from "./ReviewCard";

const WriteReview = () => {
  const { reviewLoading } = useSelector((state) => state.review);
  const { reviews } = useSelector((state) => state.review);
  console.log(reviews);
  return (
    <section className="max-w-[1100px] mx-auto px-4 relative overflow-hidden">
      {reviewLoading ? (
        <Loader />
      ) : reviews.length === 0 ? (
        <div>
          {" "}
          <p className="text font-bold text-center text-white mb-10 drop-shadow-lg mt-6">
            Please give me your review — your feedback helps me a lot.
          </p>
          {/* review box */}
          <div className="bg-[#355f6931] p-4">
            <div className="mx-auto w-[90%] max-w-[600px] relative overflow-hidden">
              <p className="runningTxt">You're posting publicly</p>
              {/* review form */}
              <ReviewFrom />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ReviewCard />
        </div>
      )}
    </section>
  );
};

export default WriteReview;
