import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import ReviewFrom from "./ReviewFrom";
import Loader from "../../../common/Loader";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { getClientReview } from "../../../../../services/operations/reviews";
import { setSingleReview } from "../../../../../slices/review";

const WriteReview = () => {
  const { token } = useSelector((state) => state.auth);
  const { singleReview } = useSelector((state) => state.review);
  const { reviewLoading } = useSelector((state) => state.review);
  const { allReviews } = useSelector((state) => state.review);
  const [loading, setLoading] = useState(false);
  const [dbReview, setdbReview] = useState(null);
  const dispatch = useDispatch();

  // pahale db me dekho ki koi data hai ???
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getClientReview(token);
        setdbReview(result);
      } catch (err) {
        console.log("error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    if (!singleReview || Object.keys(singleReview).length === 0) {
      if (dbReview) dispatch(setSingleReview(dbReview));
    }
  }, [dbReview, dispatch]);

  return (
    <section className="max-w-[1100px] mx-auto px-4 relative overflow-hidden">
      {reviewLoading ? (
        <Loader />
      ) : !singleReview ? (
        <div>
          <p className="text font-bold text-center text-white mb-10 drop-shadow-lg mt-6">
            Please give me your review — your feedback helps me a lot.
          </p>
          <div className="bg-[#355f6931] p-4">
            <div className="mx-auto w-[90%] max-w-[600px] relative overflow-hidden">
              <p className="runningTxt">You're posting publicly</p>
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
