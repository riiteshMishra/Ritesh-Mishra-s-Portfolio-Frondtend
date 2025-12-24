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
  {
    id: 5,
    name: "Write Review",
    path: "/dashboard/write-review",
    icon: "FaStar",
    type: ACCOUNT_TYPE.CLIENT,
  },
  {
    id: 6,
    name: "User Reviews",
    path: "/dashboard/user-reviews",
    icon: "FaStar",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 7,
    name: "Create Project",
    path: "/dashboard/create-project",
    icon: "FaFolderPlus",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 8,
    name: "Your Projects",
    path: "/dashboard/your-projects",
    icon: "FaFolderOpen",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    id: 9,
    name: "Category",
    path: "/dashboard/category",
    icon: "FaEdit",
    type: ACCOUNT_TYPE.ADMIN,
  },
];
