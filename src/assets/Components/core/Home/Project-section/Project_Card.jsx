import React, { useState } from "react";

const Project_Card = ({ card_data }) => {
  const [showFull, setShowFull] = useState(false);

  const MAX_LENGTH = 180;

  const isLong = card_data.description.length > MAX_LENGTH;

  const displayedText = showFull
    ? card_data.description
    : card_data.description.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-lg">
      {/* Thumbnail */}
      <img
        src={card_data.thumbnail}
        alt={card_data.projectName}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white">
          {card_data.projectName}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 whitespace-pre-line">
          {displayedText} {/* See More / Less */}
          {isLong && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-blue-400 text-sm hover:underline cursor-pointer"
            >
              {showFull ? "See Less" : "See More"}
            </button>
          )}
        </p>

        {/* Tech stacks */}
        <div>
          <p className="text-sm text-zinc-300 mb-1">Frontend</p>
          <div className="flex flex-wrap gap-2">
            {card_data.frontendTech.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-zinc-300 mb-1">Backend</p>
          <div className="flex flex-wrap gap-2">
            {card_data.backendTech.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3">
          <a
            href={card_data.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-md"
          >
            GitHub
          </a>

          <a
            href={card_data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project_Card;
