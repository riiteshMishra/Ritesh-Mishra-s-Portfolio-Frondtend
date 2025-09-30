// links.js
import { ACCOUNT_TYPE } from "../../utils/utilsData";

// Dashboard links
export const dashboardLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "FaUser",
  },
  {
    id: 2,
    name: "Liked Blogs",
    path: "/dashboard/liked-blogs",
    icon: "FaHeart",
  },
  {
    id: 3,
    name: "Create Blog",
    path: "/dashboard/create-blog",
    icon: "FaPen",
    type: ACCOUNT_TYPE.ADMIN, // Only for admins
  },
  {
    id: 4,
    name: "My Blogs",
    path: "/dashboard/my-blogs",
    icon: "FaBlog",
    type: ACCOUNT_TYPE.ADMIN, // Only for admins
  },
];
