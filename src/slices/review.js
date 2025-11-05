import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allReviews: localStorage.getItem("allReviews")
    ? JSON.parse(localStorage.getItem("allReviews"))
    : [],
  singleReview: localStorage.getItem("singleReview")
    ? JSON.parse(localStorage.getItem("singleReview"))
    : null,
  reviewLoading: false,
  editReview: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    //  saare reviews set karne ke liye
    setAllReviews: (state, action) => {
      state.allReviews = action.payload;
      localStorage.setItem("allReviews", JSON.stringify(state.allReviews));
    },
    // ek review delete karne ke liye
    deleteReview: (state, action) => {
      state.allReviews = state.allReviews.filter(
        (review) => review.id !== action.payload
      );
      localStorage.setItem("allReviews", JSON.stringify(state.allReviews));
    },

    //  loading toggle karne ke liye
    setReviewLoading: (state, action) => {
      state.reviewLoading = action.payload;
    },

    // edit mode on/off karne ke liye
    setEditReview: (state, action) => {
      state.editReview = action.payload;
    },

    // sabhi reviews clear karne ke liye
    clearAllReviews: (state) => {
      state.allReviews = [];
      localStorage.removeItem("allReviews");
    },

    setSingleReview: (state, action) => {
      state.singleReview = action.payload;
      localStorage.setItem("singleReview", JSON.stringify(state.singleReview));
    },
    clearSingleReview: (state, action) => {
      state.singleReview = null;
      localStorage.removeItem("singleReview");
    },
  },
});

export const {
  setAllReviews,
  deleteReview,
  setReviewLoading,
  setEditReview,
  clearAllReviews,
  setSingleReview,
  clearSingleReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;
