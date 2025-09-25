import Skill from "./Skills";
import { TypeAnimation } from "react-type-animation";
import HireMe from "./HireMe";
import SocialMedia from "./SocialMedia";
import { homepageTexts } from "../../../Data/homepage";
import ModernText from "../../common/ModernText";
const LeftBox = () => {
  const { heading, role, runningText, description } = homepageTexts;
  return (
    <article className="w-full md:w-[48%] flex flex-col">
      <header>
        <ModernText
          text={heading}
          customClasses="text-[3.3rem] bg-clip-text bg-gradient-to-r from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4] "
        />

        <div className="Bebas text-yellow-300 capitalize mt-5">
          <TypeAnimation
            sequence={homepageTexts.role.flatMap((r) => [r, 1000])}
            speed={50}
            style={{ fontSize: "2rem" }}
            repeat={Infinity}
          />
        </div>
      </header>

      <p className="text-lg py-4 text-gray-400">{description}</p>

      <div className="flex sm:flex-row flex-col gap-4 mt-5">
        {/* <p className="Bebas capitalize tracking-wider text-3xl leading-3 flex items-center">
                Skills
                <IoIosArrowRoundForward className=" font-bold tracking-wider text-3xl leading-3" />
              </p> */}
        <Skill />
      </div>

      <div className="flex sm:items-center gap-4 mt-10 flex-col sm:flex-row w-fit ">
        <p className="Bebas text-4xl leading-6">Let’s work together</p>
        <HireMe />
      </div>

      <div className="mt-12">
        <SocialMedia />
      </div>
    </article>
  );
};

export default LeftBox;
