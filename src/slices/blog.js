import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: localStorage.getItem("blogData")
    ? JSON.parse(localStorage.getItem("blogData"))
    : null,
  loading: false,
  step: 2,
  edit: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // create blog
    setBlog: (state, action) => {
      state.blog = action.payload;
      localStorage.setItem("blogData", JSON.stringify(action.payload));
    },

    // update blog
    updateBlog: (state, action) => {
      state.blog = { ...state.blog, ...action.payload };
      localStorage.setItem("blogData", JSON.stringify(state.blog));
    },

    // delete blog
    deleteBlog: (state) => {
      state.blog = null;
      localStorage.removeItem("blogData");
    },
    setStep: (state, actions) => {
      state.step = actions.payload;
    },
  },
});

export const { setBlog, updateBlog, deleteBlog, setStep } = blogSlice.actions;
export default blogSlice.reducer;
