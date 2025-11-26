import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navigationData } from "./data";
const OverlayBar = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="bg-gray-900 py-4 z-10  fixed -bottom-0 left-0 sm:hidden ">
      <div className="flex justify-evenly  min-w-screen text-white/70">
        {navigationData.map((link) => {
          const IconComponent = FaIcons[link.icon];
          if (link.type && link.type !== user?.accountType) return null;

          return (
            <Link key={link.id} to={link.path} title={link.name}>
              {IconComponent && <IconComponent />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OverlayBar;
