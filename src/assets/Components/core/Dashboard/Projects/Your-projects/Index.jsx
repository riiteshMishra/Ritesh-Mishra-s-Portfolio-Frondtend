import React, { useEffect, useState } from "react";
import { getAllProjects } from "../../../../../../services/operations/project";
import ProjectCard from "./ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../common/Loader";

// Icons
import { FaFolderOpen, FaCode } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";

const YourProjects = () => {
  const { projectData, isLoaded } = useSelector((state) => state.project);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);
        await getAllProjects(dispatch);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (!isLoaded) fetchAllProjects();
  }, [isLoaded, dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-[calc(100vh-60px)] overflow-hidden flex flex-col items-center justify-start px-4 pb-12 pt-4">
      {/* Header */}
      <div className="text-center mb-10 animate-fadeIn">
        <div className="flex items-center justify-center gap-3 text-white">
          <FaFolderOpen className="text-4xl text-blue-400 animate-bounce-slow" />
          <h1 className="text-4xl font-bold">Your Projects</h1>
        </div>

        <p className="text-white/70 mt-3 text-lg flex items-center justify-center gap-2">
          Project created by
          <span className="text-blue-400 font-semibold">YOU</span>
          <FaCode className="text-blue-300 animate-spin-slow" />
        </p>

        <p className="text-white/60 text-base">Keep Coding, Keep Growing</p>
      </div>

      {/* No Projects */}
      {!loading && projectData?.length === 0 && (
        <div className="text-center text-white/70 text-xl mt-20 animate-scaleIn">
          <CiFaceSmile className="text-6xl text-blue-300 mx-auto mb-3 animate-bounce" />
          No projects found
          <p className="text-white text-lg mt-2">
            Start creating your first project and shine brighter!
          </p>
        </div>
      )}

      {/* Projects Grid */}
      {projectData?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeInSlow">
          {projectData.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourProjects;
