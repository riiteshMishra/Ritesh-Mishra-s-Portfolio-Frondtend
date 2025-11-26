import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: localStorage.getItem("testimonials")
    ? JSON.parse(localStorage.getItem("testimonials"))
    : [],
  isLoaded: false,
};
const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
      state.isLoaded = true;
      /// local storage me save kr diya
      localStorage.setItem("testimonials", JSON.stringify(state.testimonials));
    },
  },
});

export const { setTestimonials } = homeSlice.actions;
export default homeSlice.reducer;
