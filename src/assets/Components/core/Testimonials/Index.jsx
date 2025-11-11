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
    <section className=" text-white py-12 border-t-[1px] border-cyan-700 ">
      <div className="container">
        <p className="text-center capitalize text-3xl my-2">
          <strong className="">
            {" "}
            My Satisfied Clients <br />
            Testimonials
          </strong>
        </p>

        {/* swiper */}
        <div className=" text-white ">
          <SwiperComponent reviews={reviews} loading={loading} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
