import { homepageTexts } from "../../../Data/homepage";

const RightBox = () => {
  const { heading, role, runningText, description } = homepageTexts;
  return (
    <article className="w-full md:w-[48%] flex flex-col justify-center items-center">
      <div className="mt-13">
        {/* dev image with effect */}
        <img
          src="https://res.cloudinary.com/dwpplwqzs/image/upload/v1758948559/Portfolio-site/sees9qxv9tmbifoauvxz.jpg"
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
