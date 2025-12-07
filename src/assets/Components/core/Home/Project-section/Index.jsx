import React, { useState } from "react";
import { useSelector } from "react-redux";
import YourProjects from "../../Dashboard/Projects/Your-projects/Index";
import ProjectCard from "../../Dashboard/Projects/Your-projects/ProjectCard";
import ProjectCards from "../../Dashboard/Projects/Your-projects/ProjectCards";

const ProjectSection = () => {
  const [projectData, setProjectData] = useState(true);
  return (
    <section className="text-white">
      <div className="max-w-[1200px] mx-auto w-11/12">
        {projectData && (
          <div className="flex flex-col gap-x-5 gap-y-10">
            <h3
              className="text-center text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
                         text-transparent bg-clip-text
                         tracking-wide
                         animate-[fadeInUp_0.8s_ease-out] playfair
                         "
            >
              My Live Projects
            </h3>
           <ProjectCards/>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
