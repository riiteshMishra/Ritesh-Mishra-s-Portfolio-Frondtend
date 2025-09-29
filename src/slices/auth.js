import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // signupData: null,
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setSignupData: (state, action) => {
    //   state.signupData = action.payload;
    // },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setLoading, setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
