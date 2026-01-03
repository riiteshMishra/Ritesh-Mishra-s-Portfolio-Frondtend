import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import profileReducer from "../slices/profile";
import blogReducer from "../slices/blog";
import reviewReducer from "../slices/review";
import homeReducer from "../slices/home";
import projectReducer from "../slices/project";
import categoryReducer from "../slices/category";
import contactRequest from "../slices/contact-us";

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    blog: blogReducer,
    review: reviewReducer,
    home: homeReducer,
    project: projectReducer,
    category: categoryReducer,
    contact: contactRequest,
  },
});

export default rootReducer;
