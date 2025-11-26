import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import profileReducer from "../slices/profile";
import blogReducer from "../slices/blog";
import reviewReducer from "../slices/review";
import homeReducer from "../slices/home";

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    blog: blogReducer,
    review: reviewReducer,
    home: homeReducer,
  },
});

export default rootReducer;
