import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../../services/allApis";
import toast from "react-hot-toast";
import { setUser } from "../../slices/profile";

// Error Handler
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

// Update Profile API
export const updateProfile = async (formData, dispatch) => {
  const toastId = toast.loading("Updating profile...");
  let result = null;

  try {
    // API Call
    const response = await apiConnector(
      "POST",
      profileEndpoints.UPDATE_PROFILE_DETAILS,
      formData
    );

    console.log("UPDATE PROFILE API RESPONSE", response);

    // Response Validation
    if (!response.data?.success) {
      throw new Error(response.data?.message || "Invalid response");
    }

    // Update Redux store
    result = response.data.updatedUser;
    dispatch(setUser(result));

    toast.success("Profile updated successfully ");
  } catch (err) {
    console.error("UPDATE PROFILE API ERROR:", err);
    toast.error(getErrorMessage(err));
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
