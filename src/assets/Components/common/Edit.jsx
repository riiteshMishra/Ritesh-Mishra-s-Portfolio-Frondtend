import { BiSolidEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Edit = ({ text, path, Icon }) => {
  return (
    <Link
      to={path}
      className="h-fit w-fit flex items-center gap-2 hover:text-amber-400 bg-cyan-700 rounded py-1 px-4 hover:scale-105 transition-all duration-200 capitalize"
    >
      <p>{text ? text : "edit"}</p>
      <BiSolidEditAlt />
    </Link>
  );
};

export default Edit;
