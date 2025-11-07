import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBookOpen,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const UseFullLinks = () => {
  const useFullLinks = [
    { id: 1, text: "Home", link: "/", icon: <FaHome /> },
    { id: 2, text: "About", link: "/about", icon: <FaUser /> },
    { id: 3, text: "Projects", link: "/projects", icon: <FaBriefcase /> },
    { id: 4, text: "Blogs", link: "/blogs", icon: <FaBlog /> },
    { id: 5, text: "Contact-us", link: "/contact-us", icon: <FaEnvelope /> },
  ];
  return (
    <section className=" h-fit w-fit px-6 max-w-[400px] md:flex flex-col items-center  ">
      <h1 className="text-3xl font-extrabold leading-tight md:mb-8 mb-2">
        <span className="text-gray-100">Use-full-links</span>
      </h1>

      <ul className="space-y-3">
        {useFullLinks.map(({ id, text, link, icon }) => (
          <Link key={id} to={link}>
            <p className="flex items-center mb-4 gap-4 text-gray-400 hover:text-indigo-500 transition">
              {icon}
              {text}
            </p>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default UseFullLinks;
