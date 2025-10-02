import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndPoints, blogsEndPoints, categoryEndPoints } from "../allApis";
import { clearToken, setToken } from "../../slices/auth";
import { deleteUser, setUser } from "../../slices/profile";

//  Error Handler
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

// --------------------- Auth ---------------------

// Send OTP
export const sendOtp = async (email) => {
  const toastId = toast.loading("Sending OTP...");
  try {
    const response = await apiConnector("POST", authEndPoints.SEND_OTP_API, {
      email,
    });

    if (!response.data.success)
      throw new Error(response.data.message || "OTP send failed");

    toast.success("OTP sent successfully");
    return response.data;
  } catch (err) {
    console.error("SEND OTP ERROR:", err);
    toast.error(getErrorMessage(err, "Send OTP error"));
    throw err;
  } finally {
    toast.dismiss(toastId);
  }
};

// Signup
export const signup = async (formData, navigate) => {
  const toastId = toast.loading("Submitting your data...");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      authEndPoints.SIGN_UP_API,
      formData
    );

    if (!response.data.success)
      throw new Error(response.data.message || "Signup failed");

    result = response.data;
    toast.success("Signup successful");
    navigate("/login");
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    toast.error(getErrorMessage(err, "Signup failed"));
  } finally {
    toast.dismiss(toastId);
  }
  return result;
};

// Login
export const login = async (formData, navigate, dispatch) => {
  const toastId = toast.loading("Attempting login...");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      authEndPoints.LOG_IN_API,
      formData
    );

    if (!response.data.success)
      throw new Error(response.data.message || "Login failed");

    result = response.data;
    dispatch(setToken(result.token));
    dispatch(setUser(result.user));

    toast.success("Login successful");
    navigate("/dashboard/my-profile");
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    toast.error(getErrorMessage(err, "Login failed"));
  } finally {
    toast.dismiss(toastId);
  }
  return result;
};

// Logout
export const logout = async (navigate, dispatch) => {
  try {
    dispatch(setToken(null));
    dispatch(clearToken());
    dispatch(setUser(null));
    dispatch(deleteUser());
    toast.success("Logout successful");
    navigate("/");
  } catch (err) {
    console.error("LOGOUT ERROR:", err);
    toast.error("Logout failed");
  }
};

// --------------------- Blog ---------------------

// Create Blog
export const createBlog = async (formData, token) => {
  const toastId = toast.loading("Creating blog...");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      blogsEndPoints.CREATE_BLOG_API,
      formData,
      {
        Authorization: `Bearer ${token}`, // ✅ direct header
      }
    );

    if (!response.data.success)
      throw new Error(response.data.message || "Blog creation failed");

    result = response.data.blog;
    toast.success("Blog created successfully!");
  } catch (err) {
    console.error("CREATE BLOG ERROR:", err);
    toast.error(getErrorMessage(err, "Blog creation failed"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// Update Blog
export const updateBlog = async (formData, token) => {
  const toastId = toast.loading("Updating blog...");
  let result;

  try {
    const response = await apiConnector(
      "PUT",
      blogsEndPoints.UPDATE_BLOG_API,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success)
      throw new Error(response.data.message || "Blog update failed");

    result = response.data;
    toast.success("Blog updated successfully!");
  } catch (err) {
    console.error("UPDATE BLOG ERROR:", err);
    toast.error(getErrorMessage(err, "Blog update failed"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// Get All Categories
export const getAllCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      categoryEndPoints.GET_ALL_CATEGORIES_API
    );

    if (!response.data.success)
      throw new Error(response.data.message || "Failed to fetch categories");

    result = response.data.allCategories;
    console.log("Categories fetched successfully", result);
  } catch (err) {
    console.error("GET CATEGORIES ERROR:", err);
    toast.error(getErrorMessage(err, "Failed to fetch categories"));
  }
  return result;
};
