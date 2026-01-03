import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestLoading: false,
  requests: localStorage.getItem("requests")
    ? JSON.parse(localStorage.getItem("requests"))
    : [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
      localStorage.setItem("requests", JSON.stringify(action.payload));
      state.requestLoading = false;
    },

    setRequestLoading: (state, action) => {
      state.requestLoading = action.payload;
    },
  },
});

export const { setRequests, setRequestLoading } = contactSlice.actions;
export default contactSlice.reducer;
