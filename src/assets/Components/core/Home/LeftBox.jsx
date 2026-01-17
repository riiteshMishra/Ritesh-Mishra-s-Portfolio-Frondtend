import Skill from "./Skills";
import { TypeAnimation } from "react-type-animation";
import { homepageTexts } from "../../../Data/homepage";
const LeftBox = () => {
  const { heading, role, runningText, description } = homepageTexts;
  return (
    <article className="w-full md:w-[48%] flex flex-col justify-center pt-5">
      <header>
        <h1 className="text-[3.3rem] bg-clip-text bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4] lg:text-left text-center ModernText playfair">
          {heading}
        </h1>
        <div className="lg:text-left playfair font-bold text-center flex flex-col">
          <span className="lg:text-left playfair font-bold text-center text-yellow-300 text-4xl">
            I'm a
          </span>
          <TypeAnimation
            sequence={homepageTexts.role.flatMap((r) => [r, 1000])}
            speed={50}
            style={{ fontSize: "2rem" }}
            repeat={Infinity}
            className="text-gray-300 font-bold"
          />
        </div>
      </header>

      {/* description */}
      <p className="text-lg py-4 text-gray-400 lg:text-left text-center font-ro">
        {description}
      </p>

      <Skill />

      {/* <div className="flex gap-4 mt-10 justify-center  flex-col items-center md:items-start">
        <p className="playfair text-4xl  text-white">Let’s work together</p>
        <HireMe />
      </div> */}

      {/* <div className="mt-12 flex items-center justify-center sm:justify-start">
        <SocialMedia />
      </div> */}
    </article>
  );
};

export default LeftBox;
