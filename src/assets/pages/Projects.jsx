import { projects } from "../Data/projectspage";
import { useEffect } from "react";
const ProjectsPage = () => {
     useEffect(() => {
       document.title = "Ritesh | Mishra | Projects";
     }, []);
  return (
    <section className="container mx-auto py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-sm text-gray-400 my-2">{project.description}</p>

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
    </section>
  );
};

export default ProjectsPage;
