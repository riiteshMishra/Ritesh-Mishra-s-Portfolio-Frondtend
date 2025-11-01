import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: localStorage.getItem("reviews")
    ? JSON.parse(localStorage.getItem("reviews"))
    : [],
  reviewLoading: false,
  editReview: false,
};
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.reviews.push(action.payload);
      localStorage.setItem("reviews", JSON.stringify(state.reviews));
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(
        (review) => review.id !== action.payload
      );
      localStorage.setItem("reviews", JSON.stringify(state.reviews));
    },
    setReviewLoading: (state, action) => {
      state.reviewLoading = action.payload;
    },
    setEditReview: (state, action) => {
      console.log("actions",action)
      state.editReview = action.payload;
    },
  },
});

export const { setReview, deleteReview, setReviewLoading, setEditReview } =
  reviewSlice.actions;
export default reviewSlice.reducer;
