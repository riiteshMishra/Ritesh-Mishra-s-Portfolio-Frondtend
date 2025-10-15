import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { contactUsEndpoints } from "../allApis";

//  Error Handler
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

export const raiseRequest = async (data) => {
  const toastId = toast.loading("Submitting form...");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      contactUsEndpoints.RAISE_REQUEST,
      data
    );

    if (!response.data.success) throw new Error("Invalid response");
    console.log("CONTACT US FORM RESPONSE", response);
    result = response.data;
    toast.success(
      "Your request has been received! We'll get back to you soon."
    );
  } catch (err) {
    console.log("RAISE A REQUEST API RESPONSE:", err);
    toast.error(getErrorMessage(err));
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
