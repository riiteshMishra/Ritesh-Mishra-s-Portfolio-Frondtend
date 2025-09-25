import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = {
  frontend: [
    { name: "HTML5", icon: FaHtml5, understanding: 94 },
    { name: "CSS3", icon: FaCss3Alt, understanding: 85 },
    { name: "JavaScript", icon: FaJsSquare, understanding: 78 },
    { name: "React.js", icon: FaReact, understanding: 70 },
    { name: "Redux", icon: SiRedux, understanding: 75 },
    { name: "Tailwind CSS", icon: SiTailwindcss, understanding: 95 },
    { name: "Bootstrap", icon: SiBootstrap, understanding: 40 },
    { name: "Git", icon: FaGitAlt, understanding: 60 },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, understanding: 70 },
    { name: "Express.js", icon: SiExpress, understanding: 75 },
    { name: "MongoDB", icon: SiMongodb, understanding: 60 },
    { name: "Mongoose", icon: FaDatabase, understanding: 78 },
    { name: "REST APIs", icon: SiPostman, understanding: 80 },
    { name: "JWT Authentication", icon: SiJsonwebtokens, understanding: 95 },
  ],
  tools: [
    { name: "Postman", icon: SiPostman, understanding: 67 },
    { name: "VS Code", icon: VscVscode, understanding: 90 },
  ],
};


export const aboutMe = {
  intro: "Hello, I am Ritesh Mishra. I am a Full Stack Developer.",
  currentlyWhatIdo:
    "Right now, I am looking for a Frontend role to start and stabilize my career.",
  journey:
    "In 2022, I passed 12th. I come from a village area, so I did not have resources to study more. I took a drop and wasted almost 1.5 years in online games. One day my friend asked me, do you want to do something in career or not? I was blank. He suggested we try hacking. I agreed but we had no resources. Then my friend shared HTML and CSS videos with me. At first, I did not understand HTML or CSS, and JavaScript was even harder. One day I realized companies will not call me just for learning cyber security. I already had some basic understanding of HTML and CSS, so I decided to do React, then Backend. I thought even if nothing works, I can build my own web app and show it. With this thought, I kept learning, and with the help of an instructor, I built a full stack app called Study Notion.",
};
