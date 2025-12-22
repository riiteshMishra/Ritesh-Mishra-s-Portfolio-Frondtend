import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { logout } from "../../../../../services/operations/auth";
import { useDispatch } from "react-redux";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 capitalize">
      {/* Settings */}
      <NavLink to="settings">
        {({ isActive }) => (
          <motion.p
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`cursor-pointer rounded-md px-3 py-2 transition flex items-center gap-x-2
           
              ${
                isActive
                  ? "bg-gray-100 text-black"
                  : "text-gray-200 hover:bg-gray-500"
              }
            `}
          >
            <IoSettings className="text-" />
            <span> Settings</span>
          </motion.p>
        )}
      </NavLink>

      {/* Logout */}
      <motion.p
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer rounded-md px-3 py-2 text-red-500 hover:bg-red-50 flex  items-center gap-x-2"
        onClick={() => logout(navigate, dispatch)}
      >
        <CiLogout />
        <span> Logout</span>
      </motion.p>
    </div>
  );
};

export default Menu;
