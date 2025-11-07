import RightBox from "../Components/core/Home/RightBox";
import LeftBox from "../Components/core/Home/LeftBox";
import Footer from "../Components/core/Footer/Index";
const Home = () => {
  // bg-[#ff000025]   min-h-[calc(100vh-60)]
  return (
    <div>
      <main className="HomePage min-h-screen">
        <section className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between py-10 ">
            {/* left box */}
            <LeftBox />

            {/* right box */}
            <RightBox />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
