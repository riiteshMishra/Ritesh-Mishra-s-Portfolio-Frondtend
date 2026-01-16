// Data/projects.js
import { FaReact, FaNodeJs } from "react-icons/fa";

// export const projects = [
//   // {
//   //   id: 1,
//   //   name: "Portfolio Website",
//   //   description: "My personal website made with React and Tailwind.",
//   //   image:
//   //     "https://res.cloudinary.com/dwpplwqzs/image/upload/v1760594878/Portfolio-site/iwfattakau2yvgbq7rqg.png",
//   //   technologies: {
//   //     frontend: ["React", "Tailwind CSS", "HTML", "CSS"],
//   //     backend: ["NodeJs", "ExpressJs", "MongoDb"],
//   //   },
//   //   github:
//   //     "https://github.com/riiteshMishra/Ritesh-Mishra-s-Portfolio-Frondtend",
//   //   live: "https://ritesh-mishra-s-portfolio-frondtend.vercel.app/",
//   // },
//   // {
//   //   id: 2,
//   //   name: "Study notion course selling platform",
//   //   description:
//   //     "A simple online course selling platform made using React and Node.js.",
//   //   image:
//   //     "https://res.cloudinary.com/dwpplwqzs/image/upload/v1760595477/Portfolio-site/uu4metgc7quh6c2ldkw7.png",
//   //   technologies: {
//   //     frontend: ["React", "Tailwind CSS"],
//   //     backend: ["Node.js", "Express", "MongoDB"],
//   //   },
//   //   github: "https://github.com/riiteshMishra/megaFrontend",
//   //   live: "https://study-notion-rho-pied.vercel.app/",
//   // },

// ];

export const projects = [
  {
  _id: "6965c0f4d64b0676fdb61568",
  projectName: "studynotion – full stack learning management system (lms)",
  description:
    "StudyNotion is a full-stack Learning Management System (LMS) built using React.js, Redux Toolkit, Tailwind CSS, Framer Motion, and React Router on the frontend to deliver a fast, responsive, and interactive user experience. The application uses React Hook Form for efficient form handling and Axios for seamless API communication.\n\nOn the backend, StudyNotion is powered by Node.js and Express.js, following a RESTful API architecture with MongoDB and Mongoose for scalable database management. The platform implements JWT-based authentication, role-based access control (RBAC) for students and instructors, and bcrypt for secure password encryption. Media content such as course thumbnails and videos are managed using Cloudinary, while Razorpay / Stripe is integrated for secure course payments. Additional features like email notifications are handled using Nodemailer.\n\nThis LMS provides complete course creation, management, purchase, and consumption workflows, making StudyNotion a production-ready EdTech web application focused on scalability, performance, and user experience.",
  thumbnail:
    "https://res.cloudinary.com/dwpplwqzs/image/upload/v1768276212/Portfolio-site/qjjebi8uro4y54tzn3ep.jpg",

  frontendTech: [
    "react.js",
    "tailwind css",
    "redux-toolkit",
    "axios",
    "react-router-dom",
    "react-hook-form",
  ],

  backendTech: [
    "node.js",
    "express.js",
    "mongodb",
    "jwt (json web token)",
    "role-based access control (rbac)",
    "cloudinary",
    "razorpay",
    "bcrypt",
    "nodemailer",
    "rest api architecture",
    "middleware-based security",
  ],

  gitHubLink: "https://github.com/riiteshMishra/megaBackend",
  liveLink: "https://study-notion-rho-pied.vercel.app/",

  createdBy: "694513d373deec200cbe2da0",
  createdAt: "2026-01-13T03:50:12.562Z",
  updatedAt: "2026-01-13T03:50:12.562Z",
  __v: 0,
}
]
