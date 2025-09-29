import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import profileReducer from "../slices/profile";

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export default rootReducer;
