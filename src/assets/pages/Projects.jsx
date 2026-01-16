import EmptyProjectUi from "../Components/common/fallback_ui/MyProjects";
import { projects } from "../Data/projectspage";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/core/Footer/Index";
import Heading from "../Components/core/Projects/Heading";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Ritesh | Mishra | Projects";
  }, []);
  return (
    <section className=" min-h-[calc(100vh-60px)]">
      <main className="container mx-auto py-10 text-white ">
        <Heading />
      </main>

      {/* footer */}
      <Footer />
    </section>
  );
};

export default ProjectsPage;
