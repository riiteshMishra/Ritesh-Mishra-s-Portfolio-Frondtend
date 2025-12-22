import EmptyProjectUi from "../Components/common/fallback_ui/MyProjects";
import { projects } from "../Data/projectspage";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/core/Footer/Index";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Ritesh | Mishra | Projects";
  }, []);
  return (
    <section className=" min-h-[calc(100vh-60px)]">
      <div className="container mx-auto py-10 text-white ">
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "0px 0px 0px rgba(255,255,255,0)",
              "0px 0px 16px rgba(255,191,0,0.9)",
              "0px 0px 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
    relative text-4xl font-extrabold text-center mb-10
    bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300
    bg-clip-text text-transparent
  "
        >
          My Projects
          {/* animated underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 -bottom-2 h-[3px] w-24 -translate-x-1/2 origin-center rounded-full bg-amber-400"
          />
        </motion.h1>

        <div>
          {projects.length === 0 ? (
            <EmptyProjectUi />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#1a1a1a] p-5 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="text-sm text-gray-400 my-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-2">
                    <p className="font-medium">Frontend:</p>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {project.technologies.frontend.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="font-medium">Backend:</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.backend.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </section>
  );
};

export default ProjectsPage;
