import { useEffect } from "react";
import Footer from "../Components/core/Footer/Index";
import ProjectPageContainer from "../Components/core/Projects/Index";
import { getAllProjects } from "../../services/operations/project";
import { useDispatch } from "react-redux";

const ProjectsPage = () => {
  const dispatch = useDispatch();


  return (
    <section className=" min-h-screen">
      <main className="container mx-auto text-white ">
        {/* <ProjectCards /> */}
        <ProjectPageContainer />
      </main>

      {/* footer */}
      <Footer />
    </section>
  );
};

export default ProjectsPage;
