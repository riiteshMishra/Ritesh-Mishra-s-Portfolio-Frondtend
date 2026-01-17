import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { getAllProjects } from "../../../../../../services/operations/project";
import Loader from "../../../../common/Loader";
import {
  setAdminApiLoaded,
  setAdminApiLoading,
  setAdminProjectData,
} from "../../../../../../slices/project";

const ProjectCards = ({ limit }) => {
  // ADMIN FETCH API
  // LOADING API REDUX STORAGE
  const { adminProjectData, isAdminLoaded, isAdminApiLoading } = useSelector(
    (state) => state.project
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // AGAR isAdminLoaded === true HO CHUKA HAI TO RETURN &&
    // ADMIN PROJECT KA LENGTH > 0 RETURN
    // console.log("admin api loaded", isAdminLoaded);
    // console.log("admin project length", adminProjectData.length);
    if (isAdminLoaded && adminProjectData.length > 0) return;

    const fetchAllProjects = async () => {
      try {
        dispatch(setAdminApiLoading(true));
        const result = await getAllProjects();
        if (result?.success) dispatch(setAdminProjectData(result?.data));
        dispatch(setAdminApiLoaded(true));
      } finally {
        dispatch(setAdminApiLoading(false));
      }
    };

    if (!isAdminLoaded) fetchAllProjects();
  }, [isAdminLoaded, dispatch]);

  if (isAdminApiLoading) return <Loader />;
  const finalProjects = limit
    ? adminProjectData.slice(0, limit)
    : adminProjectData;

  return (
    <section>
      {finalProjects?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeInSlow">
          {finalProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectCards;
