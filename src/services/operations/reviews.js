import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { reviewsEndpoints } from "../allApis";
import {
  clearSingleReview,
  setEditReview,
  setSingleReview,
} from "../../slices/review";
// import { setSingleReview } from "../../slices/review";

// get error message
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

// create review
export const createReview = async (FormData, token, dispatch) => {
  let result;
  try {
    const response = await apiConnector(
      "POST",
      reviewsEndpoints.CREATE_REVIEW,
      FormData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response?.data?.success) throw new Error("Unexpected response");

    console.log("CREATE REVIEW API RESPONSE", response);

    // result
    result = response?.data?.data;
    dispatch(setSingleReview(result));
    toast.success("Review created successfully");
  } catch (err) {
    console.log("CREATE REVIEW ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};

// get client review
export const getClientReview = async (token) => {
  let result;
  try {
    const response = await apiConnector(
      "GET",
      reviewsEndpoints.GET_CLIENT_REVIEW,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("GET CLIENT REVIEW RESPONSE:", response);
    result = response?.data?.data;
  } catch (err) {
    console.log("Error in getClientReview:", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};

// update review
export const updateReview = async (formData, token, dispatch) => {
  let result;
  try {
    const response = await apiConnector(
      "POST",
      reviewsEndpoints.UPDATE_REVIEW,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("UPDATE REVIEW API RESPONSE", response);
    result = response?.data?.data;
    dispatch(setSingleReview(null));
    dispatch(clearSingleReview());
    dispatch(setSingleReview(result));
    toast.success("review updated successful");
  } catch (err) {
    console.log("UPDATE REVIEW API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};
