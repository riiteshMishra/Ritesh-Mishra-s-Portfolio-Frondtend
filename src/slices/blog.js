import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: localStorage.getItem("blogData")
    ? JSON.parse(localStorage.getItem("blogData"))
    : null,
  loading: false,
  step: 1,
  edit: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    /* ================= BLOG ================= */

    setBlog: (state, action) => {
      state.blog = action.payload;
      localStorage.setItem("blogData", JSON.stringify(action.payload));
    },

    updateBlog: (state, action) => {
      state.blog = { ...state.blog, ...action.payload };
      localStorage.setItem("blogData", JSON.stringify(state.blog));
    },

    deleteBlog: (state) => {
      state.blog = null;
      localStorage.removeItem("blogData");
    },

    setStep: (state, action) => {
      state.step = action.payload;
    },

    /* ================= SECTION ================= */

    addSection: (state, action) => {
      if (!state.blog) return;

      state.blog.contents = state.blog.contents || [];
      state.blog.contents.push(action.payload);

      localStorage.setItem("blogData", JSON.stringify(state.blog));
    },

    updateSection: (state, action) => {
      const { sectionId, data } = action.payload;
      if (!state.blog?.sections) return;

      state.blog.sections = state.blog.sections.map((sec) =>
        sec._id === sectionId ? { ...sec, ...data } : sec,
      );

      localStorage.setItem("blogData", JSON.stringify(state.blog));
    },

    deleteSection: (state, action) => {
      if (!state.blog?.sections) return;

      state.blog.sections = state.blog.sections.filter(
        (sec) => sec._id !== action.payload,
      );

      localStorage.setItem("blogData", JSON.stringify(state.blog));
    },

    /* ================= SUB SECTION ================= */

    addSubSection: (state, action) => {
      const { sectionId, subSection } = action.payload;
      if (!state.blog?.sections) return;

      const section = state.blog.sections.find((sec) => sec._id === sectionId);

      if (section) {
        section.subSections = section.subSections || [];
        section.subSections.push(subSection);
      }

      localStorage.setItem("blogData", JSON.stringify(state.blog));
    },
  },
});

export const {
  setBlog,
  updateBlog,
  deleteBlog,
  setStep,
  addSection,
  updateSection,
  deleteSection,
  addSubSection,
} = blogSlice.actions;

export default blogSlice.reducer;
