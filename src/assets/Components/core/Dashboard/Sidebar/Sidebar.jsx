import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dashboardLinks } from "../../../../Data/dashboard-links";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="sm:flex hidden flex-col gap-y-4 px-5 py-4">
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
      <div className="flex flex-col gap-2 capitalize">
       <NavLink to={"settings"}>
        <p>Settings</p>
       </NavLink>
        <p>logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
