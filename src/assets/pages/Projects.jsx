import { useEffect } from "react";
import Footer from "../Components/core/Footer/Index";
import ProjectPageContainer from "../Components/core/Projects/Index";
import { getAllProjects } from "../../services/operations/project";
import { useDispatch } from "react-redux";
import Heading from "../Components/core/Projects/Heading";

const ProjectsPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className=" min-h-screen relative overflow-hidden">
        <main className="container mx-auto text-white">
          {/* heading */}
          <Heading/>
          {/* <ProjectCards /> */}
          <ProjectPageContainer />
        </main>

        {/* footer */}
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
