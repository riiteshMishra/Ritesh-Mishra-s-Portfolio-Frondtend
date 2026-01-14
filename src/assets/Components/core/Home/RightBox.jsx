import { homepageTexts } from "../../../Data/homepage";

const RightBox = () => {
  return (
    <article className="w-full md:w-[48%] flex justify-center items-start sm:items-center ">
      <div className="">
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
