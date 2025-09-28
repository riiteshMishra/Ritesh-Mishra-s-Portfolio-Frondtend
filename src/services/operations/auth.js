import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndPoints } from "../allApis";

// Send OTP function
export const sendOtp = async (email) => {
  console.log("api emai",email)
  let result;
  const toastId = toast.loading("Sending otp...");
  try {
    const response = await apiConnector("POST", authEndPoints.SEND_OTP_API, {
      email,
    });
    console.log("OTP sending response", response);
    result = response.otp;
    toast.success("OTP sent successfully");
  } catch (err) {
    console.log("Error while sending OTP:", err);
    toast.error(err?.response?.data?.message || "Send OTP error");
    throw err;
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
