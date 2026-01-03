import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { contactUsEndpoints } from "../allApis";
import { setRequests } from "../../slices/contact-us";

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

// GET REQUESTS
export const getRequests = async (token, dispatch) => {
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      contactUsEndpoints.GET_ALL_REQUEST,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("GET CLIENT REQUESTS API RESPONSE", response);
    result = response?.data?.data;
    dispatch(setRequests(result));
  } catch (err) {
    console.log("GET CLIENT REQUEST API ERROR", err);
    toast.error(getErrorMessage(err, "fetching client requests failed."));
    return null;
  } finally {
    return result;
  }
};
