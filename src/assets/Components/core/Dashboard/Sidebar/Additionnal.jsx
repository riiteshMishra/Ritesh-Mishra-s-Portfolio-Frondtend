import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { logout } from "../../../../../services/operations/auth";
import { useDispatch } from "react-redux";

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
            className={`cursor-pointer rounded-md px-3 py-2 transition
              ${
                isActive
                  ? "bg-gray-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            Settings
          </motion.p>
        )}
      </NavLink>

      {/* Logout */}
      <motion.p
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer rounded-md px-3 py-2 text-red-500 hover:bg-red-50"
        onClick={() => logout(navigate, dispatch)}
      >
        Logout
      </motion.p>
    </div>
  );
};

export default Menu;
