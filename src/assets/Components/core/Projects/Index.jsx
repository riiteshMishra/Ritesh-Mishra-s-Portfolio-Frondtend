import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import RequestSkeleton from "../../common/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setOpenApiLoading } from "../../../../slices/project";
import ProjectCards from "./ProjectCards";
import { getAllProjects } from "../../../../services/operations/project";
import ProjectSkeleton from "../../common/Skeleton_Loadings/Project/Index";

const ProjectPageContainer = () => {
  // PROJECT ARRAY --> MAP --> SINGLE_PROJECT
  const { openApiLoading } = useSelector((state) => state.project);
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Ritesh | Mishra | Projects";
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await getAllProjects();
        if (result?.success) dispatch(setOpenApiLoading(true));
        setProjectData(result?.data);
      } finally {
        setLoading(false);
      }
    };

    if (!openApiLoading) fetchProjects();
  }, []);

  // loading
  if (loading) {
    return <ProjectSkeleton />;
  }
  return (
    <div className="min-h-screen">
      {/* cards */}
      {projectData.map((project, idx) => (
        <ProjectCards project={project} key={idx} />
      ))}
    </div>
  );
};

export default ProjectPageContainer;
