import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import profileReducer from "../slices/profile";
import blogReducer from "../slices/blog";

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    blog: blogReducer,
  },
});

export default rootReducer;
