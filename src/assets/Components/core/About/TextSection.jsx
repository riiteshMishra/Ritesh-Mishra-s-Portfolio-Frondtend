import ModernText from "../../common/ModernText";
import { aboutMe } from "../../../Data/aboutpage";
import { useState } from "react";
const TextSection = () => {
   const { intro, currentlyWhatIdo, journey } = aboutMe;
   const [fullDesc, setFullDesc] = useState(false);
  return (
    <div className="text-center px-4">
      <ModernText
        text={intro}
        customClasses=" text-3xl sm:text-4xl md:text-5xl bg-gradient-to-t from-[#4b4c7a] via-[#eb92fb] to-[#c855bc] inline-block"
      />

      <p className="text-base sm:text-lg text-richblack-200 italic mt-2">
        {currentlyWhatIdo}
      </p>

      <div className="leading-relaxed max-w-2xl mx-auto mt-4">
        <p
          className={`transition-all duration-500 ease-in-out ${
            !fullDesc ? "line-clamp-3" : ""
          }`}
        >
          {journey}
        </p>

        <button
          className="mt-3 text-blue-400 hover:text-blue-300 font-medium transition transform hover:scale-105"
          onClick={() => setFullDesc((prev) => !prev)}
        >
          {fullDesc ? "Hide..." : "Show more..."}
        </button>
      </div>
    </div>
  );
};

export default TextSection;
