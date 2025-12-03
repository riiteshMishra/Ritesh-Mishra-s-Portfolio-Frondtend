import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../Data/navbar";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SmallMenu = ({ setSlideBar, slideBar }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [isActive, setIsActive] = useState(false);

  //  Scroll LOCK when menu is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div
      className="absolute top-[60px] -left-5 -right-5 select-none flex flex-col min-h-screen md:hidden backdrop-blur-3xl transition-all duration-300 z-20"
      onClick={() => setSlideBar(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sm:px-10 flex sm:items-center justify-center gap-4"
      >
        <ul className="flex flex-col sm:flex-row text-3xl text-richblack-100 gap-5 py-10">
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
