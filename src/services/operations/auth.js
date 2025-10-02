import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndPoints, blogsEndPoints, categoryEndPoints } from "../allApis";
import { clearToken, setToken } from "../../slices/auth";
import { deleteUser, setUser } from "../../slices/profile";

// Send OTP function
export const sendOtp = async (email) => {
  const toastId = toast.loading("Sending otp...");
  try {
    const response = await apiConnector("POST", authEndPoints.SEND_OTP_API, {
      email,
    });
    // console.log("OTP sending response", response);
    console.table(response.data);
    toast.success("OTP sent successfully");
  } catch (err) {
    console.log("Error while sending OTP:", err);
    toast.error(err?.response?.data?.message || "Send OTP error");
    throw err;
  } finally {
    toast.dismiss(toastId);
    return;
  }
};

// signup data
export const signup = async (formData, navigate, dispatch) => {
  const toastId = toast.loading("Submitting your data");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      authEndPoints.SIGN_UP_API,
      formData
    );

    if (!response.data.success) return toast.error("Sign up failed");

    result = response.data;
    toast.success("Signup successfully");
    navigate("/login");
  } catch (err) {
    const errMessage = err.response.data.message || "Signup Failed";
    toast.error(errMessage);
    console.log("SIGNUP API RESPONSE.........", err);
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
// login function
export const login = async (formData, navigate, dispatch) => {
  const toastId = toast.loading("Please hold on, attempt to login");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      authEndPoints.LOG_IN_API,
      formData
    );

    // validation
    if (!response.data.success) return toast.error("Login failed");

    console.log("LOGIN API RESPONSE.........", response);

    result = response.data;

    // SET TOKEN
    dispatch(setToken(response.data.token));

    // SET PROFILE DATA
    dispatch(setUser(response.data.user));

    toast.success("Login successfully");
    navigate("/dashboard/my-profile");
  } catch (err) {
    console.log("LOGIN API ERROR RESPONSE..........", err);
    const errMessage =
      err.message || err.response.data.message || "Login failed";
    toast.error(errMessage);
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};

// logout function
export const logout = async (navigate, dispatch) => {
  try {
    dispatch(setToken(null));
    dispatch(clearToken());
    dispatch(setUser(null));
    dispatch(deleteUser());
    toast.success("Logout successfully");
    navigate("/");
  } catch (err) {
    console.log("logout err", err);
    toast.error("logout failed");
  }
};

// create blog
export const createBlog = async (formData, token) => {
  const toastId = toast.loading("Creating blog...");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      blogsEndPoints.CREATE_BLOG_API,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log("CREATE BLOG API RESPONSE:", response.data);
    result = response.data;
    toast.success("Blog created successfully!");
  } catch (err) {
    console.error("CREATE BLOG API ERROR:", err);
    toast.error(err?.response?.data?.message || "Blog creation failed.");
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// get categories
export const getAllCategories = async () => {
  const toastId = toast.loading("Fetching categories...");
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      categoryEndPoints.GET_ALL_CATEGORIES_API
    );

    if (!response.data.success)
      throw new Error(response.data.message || "Internal server error");
    // console.log("GET ALL CATEGORIES API RESPONSE...", response);
    result = response.data.allCategories;
    toast.success("All categories fetched successfully!");
  } catch (err) {
    console.error("GET CATEGORIES API ERROR", err);
    toast.error(err.message || "Failed to fetch categories");
  } finally {
    toast.dismiss(toastId);
  }
  return result;
};
