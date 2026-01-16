import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectData: localStorage.getItem("projectData")
    ? JSON.parse(localStorage.getItem("projectData"))
    : [],

  isLoaded: false,
  isOpenLoaded: false,
  edit: false,
  openApiLoading: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectData: (state, action) => {
      state.projectData = action.payload;
      // local storage me set krne ke liye localStorage("key",value)  dena hota hai
      if (Array.isArray(action.payload)) state.isOpenLoaded = true;

      localStorage.setItem("projectData", JSON.stringify(action.payload));
    },
    setOpenApiLoading: (state, action) => {
      state.openApiLoading = action.payload;
    },
  },
});

export const { setProjectData, setOpenApiLoading } = projectSlice.actions;
export default projectSlice.reducer;
