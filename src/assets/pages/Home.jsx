import RightBox from "../Components/core/Home/RightBox";
import LeftBox from "../Components/core/Home/LeftBox";
const Home = () => {
  // bg-[#ff000025]   min-h-[calc(100vh-60)]
  return (
    <main className="HomePage">
      <section className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between py-10 ">
          {/* left box */}
          <LeftBox />

          {/* right box */}
          <RightBox />
        </div>
      </section>
    </main>
  );
};

export default Home;
