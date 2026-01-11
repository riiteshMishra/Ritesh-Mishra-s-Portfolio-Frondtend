import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestLoading: false,
  requests: localStorage.getItem("requests")
    ? JSON.parse(localStorage.getItem("requests"))
    : [],
  adminRequests: localStorage.getItem("adminRequests")
    ? JSON.parse(localStorage.getItem("adminRequests"))
    : [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
      localStorage.setItem("requests", JSON.stringify(action.payload));
      // state.requestLoading = false;
    },

    setRequestLoading: (state, action) => {
      state.requestLoading = action.payload;
    },
    updateRequestById: (state, action) => {
      const updatedRequest = action.payload;

      state.requests.forEach((req) => {
        if (req._id === updatedRequest._id) {
          Object.assign(req, updatedRequest);
        }
      });

      localStorage.setItem("requests", JSON.stringify(state.requests));
    },
    removeRequestById: (state, action) => {
      console.log("action payload", action.payload);
      state.requests = state.requests.filter(
        (req) => req._id !== action.payload
      );

      localStorage.setItem("requests", JSON.stringify(state.requests));
    },
  },
});

export const { setRequests, setRequestLoading, updateRequestById ,removeRequestById} =
  contactSlice.actions;
export default contactSlice.reducer;
