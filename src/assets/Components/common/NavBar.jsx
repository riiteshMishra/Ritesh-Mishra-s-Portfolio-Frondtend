import React, { useState } from "react";
import { navbarLinks } from "../../Data/navbar";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import SmallMenu from "./SmallMenu";
const NavBar = () => {
  const [slideBar, setSlideBar] = useState(false);
  return (
    <div className="bg-gray-800 h-[60px] relative z-10 border-b-[1px] border-richblack-600 top-0">
      <nav className="text-white container py-4  flex items-center justify-between">
        <Link to={"/"}>Ritesh Mishra</Link>
        <ul className="sm:flex gap-4 hidden">
          {navbarLinks.map((li) => (
            <li key={li.id} className=" capitalize">
              <NavLink
                to={li.path}
                className={({ isActive }) =>
                  ` ${isActive ? "text-amber-300" : "text-amber-50"}`
                }
              >
                {li.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              ` ${isActive ? "text-amber-300" : "text-amber-50"}`
            }
          >
            signup
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              ` ${isActive ? "text-amber-300" : "text-amber-50"}`
            }
          >
            login
          </NavLink>

          <div className="inline-block sm:hidden">
            {slideBar ? (
              <GiCrossMark onClick={() => setSlideBar((prev) => !prev)} />
            ) : (
              <FaBarsStaggered onClick={() => setSlideBar((prev) => !prev)} />
            )}
          </div>
        </div>

        {slideBar && <SmallMenu setSlideBar={setSlideBar} />}
      </nav>
    </div>
  );
};

export default NavBar;
