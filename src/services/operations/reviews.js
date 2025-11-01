import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { reviewsEndpoints } from "../allApis";
import { setReview } from "../../slices/review";

// get error message
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

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
    result = response.data.data;
    dispatch(setReview(result));
    toast.success("Review created successfully");
  } catch (err) {
    console.log("CREATE REVIEW ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};
