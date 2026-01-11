import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { contactUsEndpoints } from "../allApis";
import { setRequests, updateRequestById } from "../../slices/contact-us";

//  Error Handler
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

// Success Message Handler
const getSuccessMessage = (response, fallback = "Something went wrong") => {
  return response?.data?.message ?? response?.message ?? fallback;
};

export const raiseRequest = async (data) => {
  const toastId = toast.loading("Submitting form...");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      contactUsEndpoints.RAISE_REQUEST,
      data
    );

    console.log("CONTACT US FORM RESPONSE", response);

    if (!response.data.success) throw new Error("Invalid response");

    result = response.data;
    toast.success(
      getSuccessMessage(
        response,
        "Thanks for the message, we will connect with you shortly."
      )
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

// /form-status-update
export const contactRequestStatusUpdate = async (formData, token) => {
  const toastId = toast.loading("Updating status");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      contactUsEndpoints.UPDATE_REQUEST,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.log("CONTACT REQUEST UPDATE API RESPONSE", response);
    result = response?.data;
    toast.success(getSuccessMessage(response, "Request updating successful"));
  } catch (err) {
    console.log("CONTACT REQ STATUS UPDATE API ERROR", err);
    toast.error(getErrorMessage(err));
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};

//  DELETE REQUEST API
export const deleteRequest = async (formData, token) => {
  const toastId = toast.loading("Deleting requests");
  let result;
  try {
    const response = await apiConnector(
      "POST",
      contactUsEndpoints.DELETE_REQUESTS,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("DELETE REQUEST API RESPONSE", response);
    if (!response?.data?.success) throw new Error("Invalid Server Response");
    result = response?.data;
    toast.success(getSuccessMessage(response, "Deleted successfully"));
  } catch (err) {
    console.log("DELETE API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err, "Error while deleting request"));
  } finally {
    toast.dismiss(toastId);
    return result;
  }
};
