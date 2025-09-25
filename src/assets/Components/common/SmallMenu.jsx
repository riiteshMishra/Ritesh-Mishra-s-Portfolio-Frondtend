import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../Data/navbar";

const SmallMenu = ({ setSlideBar }) => {
  return (
    <div
      className="absolute top-[60px] left-0 right-0 select-none flex flex-col min-h-screen sm:hidden backdrop-blur-3xl bg-black/30 transition-all duration-300 z-30"
      onClick={() => setSlideBar(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-10 pt-10 w-fit h-fit"
      >
        <ul className="flex flex-col text-3xl text-richblack-100 gap-4">
          {navbarLinks.map((li) => (
            <li key={li.id}>
              <NavLink
                to={li.path}
                onClick={() => setSlideBar(false)}
                className={({ isActive }) =>
                  `Bebas capitalize transition-colors duration-300 ${
                    isActive
                      ? "text-amber-300"
                      : "text-amber-50 hover:text-amber-200"
                  }`
                }
              >
                {li.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallMenu;
