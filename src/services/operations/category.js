import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { categoryEndPoints } from "../allApis";
import { setCategories } from "../../slices/category";

const errorMessage = (err, fallback = "some thing went wrong") => {
  return err?.response?.message || err.message || fallback;
};

export const createCategory = async (formData, token) => {
  try {
    const response = await apiConnector(
      "POST",
      categoryEndPoints.CREATE_CATEGORY_API,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("CREATE CATEGORY RESPONSE", response);

    if (!response?.data?.success)
      return toast.error("Invalid response from server");
    toast.success(response?.data?.message);
  } catch (err) {
    console.log("CREATE CATEGORY API ERROR RESPONSE", err);
    toast.error(err.message);
  }
};

export const getCategories = async (dispatch) => {
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      categoryEndPoints.GET_ALL_CATEGORIES_API
    );

    console.log("GET ALL CATEGORY API RESPONSE ", response);
    if (!response?.data?.success) return toast.error("Invalid server response");

    result = response?.data?.data;
    dispatch(setCategories(result));
  } catch (err) {
    console.log("GET ALL CATEGORIES API ERROR RESPONSE", err);
    toast.error(errorMessage(err));
  } finally {
    return result;
  }
};

export const deleteCategory = async (categoryId, token, dispatch) => {
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      categoryEndPoints.DELETE_CATEGORY_API,
      {
        categoryId: categoryId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("DELETE CATEGORY API RESPONSE", response);

    result = response?.data?.data;
    dispatch(setCategories(result));
    toast.success("category deleted successfully");
  } catch (err) {
    console.log("DELETE CATEGORY API ERROR RESPONSE", err);
    toast.error(errorMessage(err));
  }
};
