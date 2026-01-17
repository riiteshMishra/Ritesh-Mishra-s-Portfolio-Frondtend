import { useDispatch, useSelector } from "react-redux";
import { setProjects, setProjectsLoading } from "../../../../slices/project";
import ProjectCards from "./ProjectCards";
import { getAllProjects } from "../../../../services/operations/project";
import ProjectSkeleton from "../../common/Skeleton_Loadings/Project/Index";
import EmptyProjectUi from "../../common/fallback_ui/MyProjects";
import { useEffect } from "react";

const ProjectPageContainer = () => {
  // PROJECT ARRAY --> MAP --> SINGLE_PROJECT
  const { isProjectsLoading, projects, isProjectsLoaded } = useSelector(
    (state) => state.project
  );
  // const [projects, setprojects] = useState([]);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Ritesh | Mishra | Projects";
  }, []);

  useEffect(() => {
    // Agar data pehle se hai → kuch mat karo
    if (isProjectsLoaded && projects.length > 0) return;

    const fetchProjects = async () => {
      try {
        // API HITTING
        dispatch(setProjectsLoading(true));
        const result = await getAllProjects();

        // IF SUCCEEDS RESPONSE
        if (result?.success) dispatch(setProjects(result.data));
      } finally {
        dispatch(setProjectsLoading(false));
      }
    };

    fetchProjects();
  }, [dispatch, isProjectsLoaded, projects.length]);

  // loading
  if (isProjectsLoading && !isProjectsLoaded) {
    return <ProjectSkeleton />;
  }

  return (
    <div className="min-h-screen">
      {/* cards */}
      {projects.length === 0 ? (
        <EmptyProjectUi />
      ) : (
        projects.map((project, idx) => (
          <ProjectCards project={project} key={idx} />
        ))
      )}
    </div>
  );
};

export default ProjectPageContainer;
