import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndPoints } from "../allApis";

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
export const signup = async (formData, navigate,dispatch) => {
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
    
    const errMessage =  err.response.data.message || "Signup Failed";
    toast.error(errMessage);
    console.log("SIGNUP API RESPONSE.........", err);
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
// login function
export const login = async (formData) => {
  const toastId = toast.loading("Please hold on, attempt to login");
  let result;
  try {
    const response = await apiConnector("POST", authEndPoints.LOG_IN_API, {
      formData,
    });

    // validation
    if (!response.data.success) return toast.error("Login failed");

    console.log("LOGIN API RESPONSE.........", response);

    result = response.data;

    toast.success("Login successfully");
  } catch (err) {
    console.log("LOGIN API ERROR RESPONSE..........", err);
    const errMessage = err.data.message || "Login failed";
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
