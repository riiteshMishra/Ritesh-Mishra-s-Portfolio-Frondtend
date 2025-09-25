
import { homepageTexts } from "../../../Data/homepage";
import devImage from "../../../Images/Riteshmishra.jpg";


const RightBox = () => {
  const { heading, role, runningText, description } = homepageTexts;
  return (
    <article className="w-full md:w-[48%] flex flex-col justify-center items-center">
      <div className="mt-13">
        {/* dev image with effect */}
        <img
          src={devImage}
          alt="developer-image"
          className="devImage rounded-xl h-[350px]"
        />

        {/* <div className="Blob"></div> */}
      </div>
    </article>
  );
};

export default RightBox;
