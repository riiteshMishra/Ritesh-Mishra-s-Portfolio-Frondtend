import { useEffect, useState } from "react";
import SwiperComponent from "./Swiper";
import { getAuthorizedReviews } from "../../../../services/operations/reviews";
import { useDispatch, useSelector } from "react-redux";

const Testimonials = () => {
  const { token } = useSelector((state) => state.auth);
  const { isLoaded } = useSelector((state) => state.home);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // get approved reviews
  useEffect(() => {
    const getApprovedReviews = async () => {
      try {
        setLoading(true);
        if (!isLoaded) await getAuthorizedReviews(token, dispatch);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getApprovedReviews();
  }, [token, dispatch]);

  return (
    <section className=" text-white py-12 ">
      <div className="container">
        <p className="text-center capitalize text-3xl my-2">
          <strong className="">
            My Satisfied Clients <br />
            Testimonials
          </strong>
        </p>

        {/* swiper */}

        <SwiperComponent loading={loading} />
      </div>
    </section>
  );
};

export default Testimonials;
