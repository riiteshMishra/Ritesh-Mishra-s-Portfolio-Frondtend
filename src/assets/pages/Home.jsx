import RightBox from "../Components/core/Home/RightBox";
import LeftBox from "../Components/core/Home/LeftBox";
import Footer from "../Components/core/Footer/Index";
import Testimonials from "../Components/core/Testimonials/Index";
import { useEffect } from "react";
import ProjectSection from "../Components/core/Home/Project-section/Index";
const Home = () => {
  // bg-[#ff000025]   min-h-[calc(100vh-60)]
  useEffect(() => {
    document.title = "Ritesh | Mishra | Home";
  }, []);
  return (
    <section>
      <main className="HomePage overflow-x-hidden overflow-y-auto">
        <section className="container ">
          <div className="flex flex-col md:flex-row justify-between py-12 max-w-[1200px] mx-auto">
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
