import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import RequestSkeleton from "../../common/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setOpenApiLoading, setProjectData } from "../../../../slices/project";
import ProjectCards from "./ProjectCards";
import { getAllProjects } from "../../../../services/operations/project";
import ProjectSkeleton from "../../common/Skeleton_Loadings/Project/Index";
import EmptyProjectUi from "../../common/fallback_ui/MyProjects";

const ProjectPageContainer = () => {
  // PROJECT ARRAY --> MAP --> SINGLE_PROJECT
  const { openApiLoading, projectData, isOpenLoaded } = useSelector(
    (state) => state.project
  );
  // const [projectData, setProjectData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Ritesh | Mishra | Projects";
  }, []);

  useEffect(() => {
    // Agar data pehle se hai → kuch mat karo
    if (isOpenLoaded && projectData.length > 0) return;

    const fetchProjects = async () => {
      try {
        // API HITTING
        dispatch(setOpenApiLoading(true));
        const result = await getAllProjects();

        // IF SUCCEEDS RESPONSE
        if (result?.success) dispatch(setProjectData(result.data));
      } finally {
        dispatch(setOpenApiLoading(false));
      }
    };

    fetchProjects();
  }, [dispatch, isOpenLoaded, projectData.length]);

  // loading
  if (!isOpenLoaded && openApiLoading) {
    return <ProjectSkeleton />;
  }
  return (
    <div className="min-h-screen">
      {/* cards */}
      {projectData.length === 0 ? (
        <EmptyProjectUi />
      ) : (
        projectData.map((project, idx) => (
          <ProjectCards project={project} key={idx} />
        ))
      )}
    </div>
  );
};

export default ProjectPageContainer;
