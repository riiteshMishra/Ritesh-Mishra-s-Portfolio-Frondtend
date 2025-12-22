import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dashboardLinks } from "../../../../Data/dashboard-links";
import SidebarLinks from "./SidebarLinks";
import Menu from "./Additionnal";

const Sidebar = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="flex flex-col gap-y-4 px-5 py-4">
      {/* Dashboard links */}
      <div className="flex flex-col gap-2 capitalize">
        {dashboardLinks.map((link) => {
          if (link.type && link.type !== user.accountType) return null;

          return <SidebarLinks link={link} key={link.id} />;
        })}
      </div>

      {/* Divider */}
      <div className="border-b border-gray-600"></div>

      {/* Settings links */}
      <Menu />
    </div>
  );
};

export default Sidebar;
