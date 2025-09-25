// Data/projects.js
import { FaReact, FaNodeJs } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "My personal website made with React and Tailwind.",
    image: "/projects/portfolio.png",
    technologies: {
      frontend: ["React", "Tailwind CSS", "HTML", "CSS"],
      backend: ["None"],
    },
    github: "https://github.com/ritesh/portfolio",
    live: "https://ritesh-portfolio.com",
  },
  {
    id: 2,
    name: "E-commerce App",
    description: "A simple online store made using React and Node.js.",
    image: "/projects/ecommerce.png",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
    },
    github: "https://github.com/ritesh/ecommerce",
    live: "https://ritesh-ecommerce.com",
  },
];
