import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project_Card = ({ card_data }) => {
  const [showFull, setShowFull] = useState(false);

  const MAX_LENGTH = 180;
  const isLong = card_data.description.length > MAX_LENGTH;

  const displayedText = showFull
    ? card_data.description
    : card_data.description.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  const navigate = useNavigate();
  return (
    <motion.article
      className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-lg cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      aria-label={`${card_data.projectName} full stack project`}
      // onClick={() => navigate("/projects")}
    >
      {/* Thumbnail */}
      <motion.img
        src={card_data.thumbnail}
        alt={`${card_data.projectName} project screenshot`}
        title={card_data.projectName}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-5 space-y-4">
        {/* Title (SEO important) */}
        <h3 className="text-xl font-semibold text-white">
          {card_data.projectName}
        </h3>

        {/* Visible Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={showFull ? "full" : "short"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-zinc-400 whitespace-pre-line"
          >
            {displayedText}
          </motion.p>
        </AnimatePresence>

        {/* Hidden SEO Text (Google + Screen Readers) */}
        <p className="sr-only">
          {card_data.projectName} is a full stack web application built using{" "}
          {card_data.frontendTech.join(", ")} on the frontend and{" "}
          {card_data.backendTech.join(", ")} on the backend. This project
          demonstrates real-world MERN stack development, REST API design,
          authentication, performance optimization, and scalable architecture.
        </p>

        {/* See More / Less */}
        {isLong && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-blue-400 text-sm hover:underline cursor-pointer"
            aria-expanded={showFull}
          >
            {showFull ? "See Less" : "See More"}
          </button>
        )}

        {/* Frontend Tech */}
        <div>
          <p className="text-sm text-zinc-300 mb-1">Frontend</p>
          <div className="flex flex-wrap gap-2">
            {card_data.frontendTech.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Backend Tech */}
        <div>
          <p className="text-sm text-zinc-300 mb-1">Backend</p>
          <div className="flex flex-wrap gap-2">
            {card_data.backendTech.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={card_data.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View source code on GitHub"
            className="flex-1 text-center text-sm bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-md"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href={card_data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View live project demo"
            className="flex-1 text-center text-sm bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md"
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default Project_Card;
