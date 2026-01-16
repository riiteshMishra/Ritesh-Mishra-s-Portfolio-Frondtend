import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import SingleCard from "./Card";

const ProjectCards = ({ project }) => {
  // PROJECT API SE DATA AA GYA
  // PROJECT_DATA SE MAP KR DIYA
  // MAP ME PROJECT_CARD COMPO RENDER HUAA
  // IS COMPO ME SARA DATA DESTRUCTURE HOGA
  // PROJECT_CARDS ME EK SINGLE CARD COMPO RENDER HOGA

  const {
    backendTech,
    createdAt,
    updatedAt,
    createdBy,
    description,
    frontendTech,
    gitHubLink,
    liveLink,
    projectName,
    thumbnail,
    _id,
  } = project;

  const RightCardData = {
    thumbnail,
    projectName,
  };

  const LeftCardData = {
    backendTech,
    createdAt,
    updatedAt,
    createdBy,
    description,
    frontendTech,
    gitHubLink,
    liveLink,
    _id,
  };
  // console.log("project", project);
  return (
    <article
      className="
        flex justify-between items-center
        flex-col sm:flex-row flex-wrap
        gap-x-2 gap-y-6
         rounded-xl p-4
        w-full overflow-x-hidden
      "
      aria-labelledby={`project-${project._id}`}
    >
      {/* CARD COMPONENT */}

      <SingleCard LeftCardData={LeftCardData} RightCardData={RightCardData} />
    </article>
  );
};

export default ProjectCards;

{
  /* LEFT – Project Details */
}
// <LeftCard
//   projectName={project.projectName}
//   description={project.description}
//   frontendTech={project.frontendTech}
//   backendTech={project.backendTech}
//   gitHubLink={project.gitHubLink}
//   liveLink={project.liveLink}
//   createdAt={project.createdAt}
//   updatedAt={project.updatedAt}
// />

{
  /* Divider */
}
// <div
//   className="w-1 bg-amber-50 h-100 rounded-full lg:block hidden"
//   aria-hidden="true"
// />

{
  /* RIGHT – Project Preview */
}
// <RightCard
//   thumbnail={project.thumbnail}
//   projectName={project.projectName}
// />

{
  /*  SEO micro-data */
}
// <meta itemProp="name" content={project.projectName} />
// <meta itemProp="url" content={project.liveLink} />
