import { createSlice } from "@reduxjs/toolkit";

// CACHE
const userCache = localStorage.getItem("projectData");
const adminCache = localStorage.getItem("adminProjectData");
const BACKEND_CACHE = localStorage.getItem("Backend_Cache");

const initialState = {
  // FOR BACKEND INTRACT
  sendToBackend: BACKEND_CACHE ? JSON.parse(BACKEND_CACHE) : [],
  edit: false,

  // FOR ALL USERS (Public Projects)
  projects: userCache ? JSON.parse(userCache) : [],
  isProjectsLoaded: !!userCache,
  isProjectsLoading: false,

  // ADMIN PROJECTS
  adminProjectData: adminCache ? JSON.parse(adminCache) : [],
  isAdminLoaded: false,
  isAdminApiLoading: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // FOR ALL USERS
    setProjects: (state, action) => {
      state.projects = action.payload;
      state.isProjectsLoaded = true;
      state.isProjectsLoading = false;
      localStorage.setItem("projects", JSON.stringify(action.payload));
    },
    setProjectsLoading: (state, action) => {
      state.isProjectsLoading = action.payload;
    },
    // setProjectLoaded: (state, action) => {
    //   state.isProjectsLoaded = action.payload;
    // },
    // ADMIN
    setAdminProjectData: (state, action) => {
      state.adminProjectData = action.payload;
      // if (Array.isArray(action.payload)) state.isAdminLoaded = true;
      localStorage.setItem("adminProjectData", JSON.stringify(action.payload));
    },
    setAdminApiLoading: (state, action) => {
      state.isAdminApiLoading = action.payload;
    },
    setAdminApiLoaded: (state, action) => {
      state.isAdminLoaded = action.payload;
    },
  },
});

export const {
  // FOR ALL USERS
  setProjects,
  setProjectsLoading,
  // isProjectsLoaded,

  // ADMIN
  setAdminApiLoading,
  setAdminProjectData,
  setAdminApiLoaded,
} = projectSlice.actions;
export default projectSlice.reducer;
