import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: "",
  categoryLoading: false,
  categoryEdit: false,
  categories: localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, actions) => {
      state.categories = actions.payload;
      state.categoryLoading = false;
      localStorage.setItem("categories", JSON.stringify(actions.payload));
    },
    setCategoryEdit: (state, actions) => {
      state.categoryEdit = Boolean(actions.payload);
    },
  },
});

export const { setCategories, setCategoryEdit } = categorySlice.actions;

export default categorySlice.reducer;
