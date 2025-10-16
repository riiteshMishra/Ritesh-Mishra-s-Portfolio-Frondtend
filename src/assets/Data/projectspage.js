// Data/projects.js
import { FaReact, FaNodeJs } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "My personal website made with React and Tailwind.",
    image:
      "https://res.cloudinary.com/dwpplwqzs/image/upload/v1760594878/Portfolio-site/iwfattakau2yvgbq7rqg.png",
    technologies: {
      frontend: ["React", "Tailwind CSS", "HTML", "CSS"],
      backend: ["NodeJs", "ExpressJs", "MongoDb"],
    },
    github:
      "https://github.com/riiteshMishra/Ritesh-Mishra-s-Portfolio-Frondtend",
    live: "https://ritesh-mishra-s-portfolio-frondtend.vercel.app/",
  },
  {
    id: 2,
    name: "Study notion course selling platform",
    description:
      "A simple online course selling platform made using React and Node.js.",
    image:
      "https://res.cloudinary.com/dwpplwqzs/image/upload/v1760595477/Portfolio-site/uu4metgc7quh6c2ldkw7.png",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
    },
    github: "https://github.com/riiteshMishra/megaFrontend",
    live: "https://study-notion-rho-pied.vercel.app/",
  },
];
