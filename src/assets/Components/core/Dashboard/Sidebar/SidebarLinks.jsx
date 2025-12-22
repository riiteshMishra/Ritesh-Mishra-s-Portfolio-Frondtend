import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; // sab fa icons import

const SidebarLinks = ({ link }) => {
  const IconComponent = FaIcons[link.icon]; // string -> component\
  const location = useLocation();
  const activePath = (path) => {
    console.log(path === location.pathname);
    return path === location.pathname;
  };
  return (
    <Link
      to={link.path}
      className={`flex items-center gap-2 hover:text-amber-400`}
      onClick={() => activePath(link.path)}
    >
      {IconComponent && <IconComponent />}
      <span>{link.name}</span>
    </Link>
  );
};

export default SidebarLinks;
