import React, { useState } from "react";
import ProjectCards from "../../Dashboard/Projects/Your-projects/ProjectCards";
import { useSelector } from "react-redux";

const ProjectSection = () => {
  const [showMore, setShowMore] = useState(false);
  const { projectData } = useSelector((state) => state.project);
  const [loading, setLoading] = useState(false);
  return (
    <section className="text-white relative ">
      <div className="max-w-[1200px] mx-auto w-[97%] overflow-hidden border-[1px] border-white/10 p-4 rounded-2xl backdrop-blur-sm">
        {projectData && (
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
            {projectData.length <= 3 ? (
              <ProjectCards loading={loading} setLoading={setLoading} />
            ) : (
              <>
                {showMore ? (
                  <ProjectCards loading={loading} setLoading={setLoading} />
                ) : (
                  /* Show Only First 4 */
                  <ProjectCards
                    loading={loading}
                    setLoading={setLoading}
                    limit={3}
                  />
                )}
              </>
            )}

            {/* Show More Button */}
            {projectData.length > 3 && (
              <div className="flex items-center justify-center z-10 bg-white/10 py-3 rounded-xl backdrop-blur-md my-5">
                <button
                  className="cursor-pointer text-white font-semibold px-4 py-2 rounded-lg 
                             hover:bg-white/20 transition-all duration-300"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
