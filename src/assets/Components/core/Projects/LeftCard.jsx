import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LeftCard = ({
  projectName,
  description,
  frontendTech,
  backendTech,
  gitHubLink,
  liveLink,
}) => {
  const [expanded, setExpanded] = useState(false);

  const MAX_LENGTH = 150;
  const isLong = description.length > MAX_LENGTH;

  const displayText = expanded
    ? description
    : description.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, }}
      className="w-full lg:w-fit flex justify-center overflow-x-hidden"
      aria-labelledby={`project-${projectName}`}
    >
      <div className="text-white space-y-4 max-w-[500px]">
        {/* Title (SEO important) */}
        <h2
          id={`project-${projectName}`}
          className="text-wrap font-bold capitalize text-xl md:text-2xl"
        >
          {projectName}
        </h2>

        {/* Description */}
        <motion.div
          layout
          className={`text-gray-400 rounded-2xl p-4 border ${
            expanded ? "border-green-400" : "border-white"
          }`}
        >
          <p
            className="whitespace-pre-line break-words max-h-40 overflow-y-auto text-xs"
            aria-expanded={expanded}
          >
            {displayText}
          </p>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-amber-400 text-sm hover:underline focus:outline-none cursor-pointer"
              aria-label={
                expanded
                  ? "Collapse project description"
                  : "Expand project description"
              }
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </motion.div>

        {/* Frontend Technologies */}
        <section aria-label="Frontend technologies">
          <p className="font-semibold mb-1">Frontend</p>
          <div className="flex gap-2 flex-wrap">
            {frontendTech.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-500 text-black text-xs px-2 py-[2px] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Backend Technologies */}
        <section aria-label="Backend technologies">
          <p className="font-semibold mb-1">Backend</p>
          <div className="flex gap-2 flex-wrap">
            {backendTech.map((tech, i) => (
              <span
                key={i}
                className="text-black bg-green-500 text-xs px-2 py-[2px] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links (SEO + accessibility) */}
        <nav className="flex gap-6 pt-4" aria-label="Project links">
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
            aria-label={`${projectName} GitHub repository`}
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline"
            aria-label={`${projectName} live demo`}
          >
            Live Demo
          </a>
        </nav>
      </div>
    </motion.article>
  );
};

export default LeftCard;
