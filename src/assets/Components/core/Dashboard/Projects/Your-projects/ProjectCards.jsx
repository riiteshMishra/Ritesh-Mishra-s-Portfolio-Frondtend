import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../../../../services/operations/project";
import ProjectCard from "./ProjectCard";
import Loader from "../../../../common/Loader";

const ProjectCards = ({ loading, setLoading }) => {
  const { projectData, isLoaded } = useSelector((state) => state.project);
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

  if (loading) return <Loader/>;
  return (
    <section>
      {projectData?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInSlow">
          {projectData.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectCards;
