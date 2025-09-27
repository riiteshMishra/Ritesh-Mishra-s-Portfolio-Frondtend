import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default rootReducer;
