import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div
      className="
        bg-white/10 backdrop-blur-lg border border-white/20 
        rounded-2xl shadow-xl overflow-hidden 
        hover:scale-[1.02] hover:shadow-2xl transition-all duration-300
      "
    >
      {/* Thumbnail */}
      <img
        src={project.thumbnail}
        alt={project.projectName}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 text-white">
        <h2 className="text-2xl font-semibold mb-2 capitalize">
          {project.projectName}
        </h2>

        <p className="text-white/80 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Frontend Tech Stack */}
        <div>
          <p className="font-medium text-white mb-2">Frontend Stack</p>

          {!project?.frontendTech || project.frontendTech.length === 0 ? (
            <div className="text-white/60 italic">No stack added</div>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {project.frontendTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/20 rounded-md border border-white/30 text-white text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-3">
          <a
            href={project.gitHubLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20
                       rounded-lg transition-all duration-200"
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700
                       rounded-lg transition-all duration-200 text-white"
            >
              <FaExternalLinkAlt /> <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
