import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { getAllProjects } from "../../../../../../services/operations/project";
import Loader from "../../../../common/Loader";

const ProjectCards = ({ loading, setLoading, limit }) => {
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
  const finalProjects = limit ? projectData.slice(0, limit) : projectData;

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
