import React, { useState } from "react";
import { navbarLinks } from "../../Data/navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import SmallMenu from "./SmallMenu";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { logout } from "../../../services/operations/auth";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const smallRoutes = [
    {
      id: 1,
      path: "/dashboard/my-profile",
      route: "dashboard",
      actions: () => {},
    },
    {
      id: 2,
      path: "",
      route: "logout",
      actions: () => {
        logout(navigate, dispatch);
        setIsActive(false);
      },
    },
  ];
  const [slideBar, setSlideBar] = useState(false);
  return (
    <div className="bg-gray-800 h-[60px]  z-10 border-b-[1px] border-richblack-600 top-0  ">
      <nav className="text-white container py-4  flex items-center justify-between flex-wrap">
        <Link to={"/"}>Ritesh Mishra</Link>
        <ul className="md:flex gap-4 hidden">
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

        {/* image route */}
        <div className="flex items-center gap-x-4 z-20">
          {token ? (
            <Link onClick={() => setIsActive((prev) => !prev)}>
              <div className="flex items-center">
                <img
                  src={user.image}
                  alt={"user avatar"}
                  className="h-8 w-8 object-cover object-center rounded-full"
                />{" "}
                <MdOutlineKeyboardArrowDown className="font-bold text-lg" />
              </div>
            </Link>
          ) : (
            <div>
              {/* SIGNUP LOGIN OR DASHBOARD LINKS */}
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
              </div>
            </div>
          )}
          <div className="inline-block md:hidden">
            {slideBar ? (
              <GiCrossMark onClick={() => setSlideBar((prev) => !prev)} />
            ) : (
              <FaBarsStaggered onClick={() => setSlideBar((prev) => !prev)} />
            )}
          </div>

          {isActive && (
            <div className="absolute top-13 flex flex-col right-5 bg-richblack-900 rounded p-2 ">
              {smallRoutes.map((route) => (
                <Link
                  to={route.path}
                  key={route.id}
                  onClick={route.actions}
                  className=" capitalize hover:scale-95 transition:all duration-200 hover:bg-richblack-600 py-2 px-4 rounded"
                >
                  {route.route}
                </Link>
              ))}
            </div>
          )}
        </div>

        {slideBar && (
          <SmallMenu setSlideBar={setSlideBar} slideBar={slideBar} />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
