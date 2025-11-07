import { useEffect, useState } from "react";
import SwiperComponent from "./Swiper";
import { getAuthorizedReviews } from "../../../../services/operations/reviews";
import { useSelector } from "react-redux";

const Testimonials = () => {
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  // get approved reviews
  useEffect(() => {
    const getApprovedReviews = async () => {
      try {
        setLoading(true);
        const result = await getAuthorizedReviews(token);
        if (result) setReviews(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getApprovedReviews();
  }, []);
  return (
    <section className=" text-white py-12">
      <div className="container">
        <p className="text-center capitalize text-2xl my-2">
          <strong>original reviews by our clients</strong>
        </p>

        {/* swiper */}
        <div className=" text-white ">
          <SwiperComponent  reviews={reviews} loading={loading}/>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
