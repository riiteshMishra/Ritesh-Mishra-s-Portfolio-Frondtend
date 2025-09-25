import { useState } from "react";
import { aboutMe, skills } from "../Data/aboutpage";
import ModernText from "../Components/common/ModernText";
import TextSection from "../Components/core/About/TextSection";
import SkillsSection from "../Components/core/About/SkillsSection";

const About = () => {
  // 2 * PI * r

  return (
    <main className="AboutPage overflow-hidden">
      <section className="container space-y-6 flex flex-col items-center py-10">
        {/* Text Section */}
        <TextSection />

        {/* Skills Section */}
        <SkillsSection />
      </section>
    </main>
  );
};

export default About;
