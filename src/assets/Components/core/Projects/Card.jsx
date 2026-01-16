import React from "react";
import { motion } from "framer-motion";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const SingleCard = ({ LeftCardData, RightCardData }) => {
  const {
    backendTech,
    createdAt,
    updatedAt,
    createdBy,
    description,
    frontendTech,
    gitHubLink,
    liveLink,
    _id,
  } = LeftCardData;
  const { thumbnail, projectName } = RightCardData;
  return (
    <motion.article
      className="bg-gray-900/30
        flex justify-between items-center
        flex-col sm:flex-row flex-wrap
        gap-x-2 gap-y-6
        border rounded-xl p-4
        w-full overflow-x-hidden
      "
      aria-labelledby={`project-${_id}`}
    >
      {/* Left */}
      <LeftCard
        projectName={projectName}
        description={description}
        frontendTech={frontendTech}
        backendTech={backendTech}
        gitHubLink={gitHubLink}
        liveLink={liveLink}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />

      {/* Divider (decorative) */}
      <div
        className="w-[1px] bg-amber-50 h-100 rounded-full lg:block hidden"
        aria-hidden="true"
      />

      {/* Right */}
      <RightCard thumbnail={thumbnail} projectName={projectName} />

      {/* SEO helper (invisible) */}
      <meta itemProp="name" content={projectName} />
      <meta itemProp="url" content={liveLink} />
    </motion.article>
  );
};

export default SingleCard;
