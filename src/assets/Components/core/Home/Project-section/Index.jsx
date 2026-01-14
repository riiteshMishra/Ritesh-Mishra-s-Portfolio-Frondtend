import React, { useState } from "react";
import Project_Cards from "./Project_Cards";
import { useSelector } from "react-redux";
import NoProjects from "./NoProjects";
import { projects } from "../Home_Data";

const ProjectSection = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="text-white relative my-5">
      <div className="max-w-[1200px] mx-auto w-[97%] overflow-hidden border-[1px] border-white/10 p-4 rounded-2xl backdrop-blur-sm">
        {projects && (
          <div className="">
            {/* Heading */}
            <h3
              className="text-center text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
                         text-transparent bg-clip-text tracking-wide
                         animate-[fadeInUp_0.8s_ease-out] "
            >
              My Projects
            </h3>
            <p className="text-center  text-gray-300 mb-5">
              These are the projects made by me. They show my skills.
            </p>
            {projects.length === 0 ? (
              <NoProjects />
            ) : (
              <Project_Cards projects={projects} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
