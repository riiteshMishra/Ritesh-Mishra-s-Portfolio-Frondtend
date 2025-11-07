import ModernText from "../Components/common/ModernText";
import TextSection from "../Components/core/About/TextSection";
import SkillsSection from "../Components/core/About/SkillsSection";
import Footer from "../Components/core/Footer/Index";
import Intro from "../Components/core/About/QuickIntro";

const About = () => {
  // 2 * PI * r

  return (
    <main className="AboutPage overflow-hidden">
      <section className="container space-y-6 flex flex-col items-center py-10">
        {/* quick intro */}
        <Intro />
        {/* Text Section */}
        <TextSection />

        {/* Skills Section */}
        <SkillsSection />
      </section>
      <Footer />
    </main>
  );
};

export default About;
