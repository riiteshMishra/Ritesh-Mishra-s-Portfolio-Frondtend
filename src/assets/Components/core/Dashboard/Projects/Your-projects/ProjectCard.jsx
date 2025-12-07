import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        bg-gradient-to-br from-[#1e1e2f] to-[#2a2a40]
        border border-white/10 
        rounded-2xl shadow-xl overflow-hidden 
        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,255,200,0.3)]
        transition-all duration-500
      "
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={project.thumbnail}
          alt={project.projectName}
          className="h-48 w-full object-cover brightness-95 hover:brightness-110 transition-all duration-300"
        />

        {/* edit btn */}
        <button
          className="
    absolute right-5 top-5 
    bg-green-500/20 backdrop-blur-md 
    rounded-xl px-4 py-2 cursor-pointer
    transition-all duration-300
    hover:scale-110 hover:rotate-6 
    hover:bg-green-500/30 hover:shadow-[0_0_20px_rgba(0,255,120,0.5)]
    border-[1px] border-black
  "
        >
          <BiSolidEditAlt
            className="text-xl text-green-400 drop-shadow-[0_0_5px_rgb(0,255,120)]"
            title="edit"
          />
        </button>

        {/* delete btn */}
        <button
          className="
    absolute right-5 bottom-5 
    bg-red-500/20 backdrop-blur-md 
    rounded-xl px-4 py-2 cursor-pointer
    transition-all duration-300
    hover:scale-110 hover:-rotate-6 
    hover:bg-red-500/30 hover:shadow-[0_0_20px_rgba(255,50,50,0.5)]  border-[1px] border-black
  "
        >
          <MdDelete
            className="text-xl text-white drop-shadow-[0_0_5px_rgb(255,50,50)]"
            title="delete"
          />
        </button>
      </div>

      {/* Content */}
      <div className=" p-2 px-4 text-white">
        <h2 className="text-3xl font-semibold mb-1 capitalize bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
          {project.projectName}
        </h2>

        <p className="text-white/80 text-sm mb-2 line-clamp-3">
          {project.description}
        </p>

        {/* Frontend Stack */}
        <div className="border-t-2 border-gray-700 pt-1">
          <p className="font-medium text-xl text-white mb-2">Frontend Stack</p>

          {!project?.frontendTech?.length ? (
            <div className="text-white/60 italic">No stack added</div>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {project.frontendTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-sm 
                             bg-gradient-to-r from-purple-600 to-indigo-500
                             text-white shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Backend Stack */}
        <div className="mt-2">
          <p className="font-medium text-xl text-white mb-2">Backend Stack</p>

          {!project?.backendTech?.length ? (
            <div className="text-white/60 italic">No stack added</div>
          ) : (
            <div className="flex gap-x-2 flex-wrap">
              {project.backendTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-sm 
                             bg-gradient-to-r from-green-500 to-emerald-600
                             text-white shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between my-4">
          <a
            href={project.gitHubLink}
            target="_blank"
            className="
              flex items-center gap-2 px-4 py-2 
              bg-[#24292e] hover:bg-[#333]
              rounded-lg transition-all duration-300
              text-white shadow-md hover:shadow-xl
            "
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="
                flex items-center gap-2 px-4 py-2 
                bg-blue-600 hover:bg-blue-700
                rounded-lg transition-all duration-300 text-white
                shadow-md hover:shadow-[0_0_15px_rgba(0,180,255,0.5)]
              "
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
