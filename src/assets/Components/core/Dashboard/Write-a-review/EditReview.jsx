import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewFrom";

const EditReview = () => {
  const { user } = useSelector((state) => state.profile);
  const { editReview } = useSelector((state) => state.review);
  const { singleReview } = useSelector((state) => state.review);
  const navigate = useNavigate();
  if (!user) return navigate("/login");
  return (
    <section className="max-w-[1100px] mx-auto px-4 relative overflow-hidden">
      <div>
        <p className="text font-bold text-center text-white mb-10 drop-shadow-lg mt-6">
          Please update your review — your feedback helps me a lot.
        </p>
        <div className="bg-[#355f6931] p-4">
          <div className="mx-auto w-[90%] max-w-[600px] relative overflow-hidden">
            <p className="runningTxt">You're posting publicly</p>
            <ReviewForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default EditReview;
