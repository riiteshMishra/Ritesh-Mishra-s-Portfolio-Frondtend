import { ACCOUNT_TYPE } from "../../../../../utils/utilsData";
import { FaHome, FaUser, FaBlog, FaFolderOpen, FaPhone } from "react-icons/fa";

export const navigationData = [
  // ----- Common Navigation -----
  {
    id: 1,
    name: "home",
    path: "/",
    icon: "FaHome",
  },

  // ----- From dashboardLinks -----
  {
    id: 2,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "FaUser",
  },
  {
    id: 3,
    name: "Liked Blogs",
    path: "/dashboard/liked-blogs",
    icon: "FaHeart",
  },
  {
    id: 4,
    name: "Create Blog",
    path: "/dashboard/create-blog",
    icon: "FaPen",
    type: ACCOUNT_TYPE.ADMIN, // admin only
  },
  {
    id: 5,
    name: "My Blogs",
    path: "/dashboard/my-blogs",
    icon: "FaBlog",
    type: ACCOUNT_TYPE.ADMIN, // admin only
  },
  {
    id: 6,
    name: "Write Review",
    path: "/dashboard/write-review",
    icon: "FaStar",
    type: ACCOUNT_TYPE.CLIENT, // client only
  },
  {
    id: 7,
    name: "settings",
    path: "/dashboard/settings",
    icon: "FaCog",
  },
];

export const openRoutes = [
  {
    id: 1,
    name: "home",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    name: "about",
    path: "/about",
    icon: FaUser,
  },
  {
    id: 3,
    name: "blogs",
    path: "/blogs",
    icon: FaBlog,
  },
  {
    id: 4,
    name: "projects",
    path: "/projects",
    icon: FaFolderOpen, 
  },
  {
    id: 5,
    name: "contact",
    path: "/contact-us",
    icon: FaPhone, 
  },
];
