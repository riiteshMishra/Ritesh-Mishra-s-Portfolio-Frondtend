import RightBox from "../Components/core/Home/RightBox";
import LeftBox from "../Components/core/Home/LeftBox";
import Footer from "../Components/core/Footer/Index";
import Testimonials from "../Components/core/Testimonials/Index";
import { useEffect } from "react";
import ProjectSection from "../Components/core/Home/Project-section/Index";
import { initLenis } from "../../utils/lenis";

const Home = () => {
  useEffect(() => {
    document.title = "Ritesh | Mishra | Home";
  }, []);

  // LENIS
  useEffect(() => {
    const { destroy } = initLenis({
      duration: 1.2,
    });

    return () => {
      destroy();
    };
  }, []);
  return (
    <section>
      <main className="HomePage overflow-x-hidden overflow-y-auto">
        <section className="container ">
          <div className="flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto min-h-[calc(100vh-60px)] flex-wrap">
            {/* left box */}
            <LeftBox />

            {/* right box */}
            <RightBox />
          </div>
        </section>
        <ProjectSection />
        <Testimonials />
      </main>
      <Footer />
    </section>
  );
};

export default Home;
