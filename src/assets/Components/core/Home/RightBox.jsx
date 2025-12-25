import { homepageTexts } from "../../../Data/homepage";

const RightBox = () => {
  const { heading, role, runningText, description } = homepageTexts;
  return (
    <article className="w-full md:w-[48%] flex flex-col justify-center items-center">
      <div className="mt-13">
        {/* dev image with effect */}
        <img
          src="/ritesh_mishra.jpeg"
          loading="lazy"
          alt="developer-image"
          className="devImage rounded-xl h-[400px]"
        />

        {/* <div className="Blob"></div> */}
      </div>
    </article>
  );
};

export default RightBox;
