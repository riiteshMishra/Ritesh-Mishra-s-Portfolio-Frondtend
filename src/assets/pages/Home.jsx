import RightBox from "../Components/core/Home/RightBox";
import LeftBox from "../Components/core/Home/LeftBox";
import Footer from "../Components/core/Footer/Index";
import Testimonials from "../Components/core/Testimonials/Index";
const Home = () => {
  // bg-[#ff000025]   min-h-[calc(100vh-60)]
  return (
    <section>
      <main className="HomePage">
        <section className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between py-12 ">
            {/* left box */}
            <LeftBox />

            {/* right box */}
            <RightBox />
          </div>
        </section>
      </main>
      <Testimonials/>
      <Footer />
    </section>
  );
};

export default Home;
