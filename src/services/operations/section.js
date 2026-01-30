import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { sectionsEndPoints } from "../allApis";

const getErrorMessage = (err, fallback = "Some Thing Went Wrong") =>
  err?.response?.data?.message || err?.message || fallback;

const getSuccessMessage = (response, fallback = "Process Done") =>
  response?.data?.message || fallback;

/* ============================
   CREATE SECTION
============================ */
export const createSection = async (token, formData) => {
  const toastId = toast.loading("Creating Section");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      sectionsEndPoints.CREATE_SECTION,
      formData,
      { Authorization: `Bearer ${token}` },
    );

    console.log("CREATE SECTION API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error("Invalid Response");
    }

    result = response?.data?.data;
    toast.success(getSuccessMessage(response));
  } catch (err) {
    console.log("CREATE SECTION API ERROR", err);
    toast.error(getErrorMessage(err));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

/* ============================
   UPDATE SECTION
============================ */
export const updateSection = async (token, formData) => {
  const toastId = toast.loading("Updating Section");
  let result = null;

  try {
    const response = await apiConnector(
      "PUT",
      sectionsEndPoints.UPDATE_SECTION,
      formData,
      { Authorization: `Bearer ${token}` },
    );

    if (!response?.data?.success) {
      throw new Error("Invalid Response");
    }

    result = response?.data?.data;
    toast.success(getSuccessMessage(response, "Section Updated"));
  } catch (err) {
    console.log("UPDATE SECTION API ERROR", err);
    toast.error(getErrorMessage(err));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

/* ============================
   DELETE SECTION
============================ */
export const deleteSection = async (token, sectionId) => {
  const toastId = toast.loading("Deleting Section");
  let success = false;

  try {
    const response = await apiConnector(
      "DELETE",
      sectionsEndPoints.DELETE_SECTION.replace(":sectionId", sectionId),
      null,
      { Authorization: `Bearer ${token}` },
    );

    if (!response?.data?.success) {
      throw new Error("Invalid Response");
    }

    success = true;
    toast.success(getSuccessMessage(response, "Section Deleted"));
  } catch (err) {
    console.log("DELETE SECTION API ERROR", err);
    toast.error(getErrorMessage(err));
  } finally {
    toast.dismiss(toastId);
  }

  return success;
};

/* ============================
   GET SECTION BY ID
============================ */
export const getSectionById = async (token, sectionId) => {
  let result = null;

  try {
    const response = await apiConnector(
      "GET",
      sectionsEndPoints.GET_SECTION_BY_ID.replace(":sectionId", sectionId),
      null,
      { Authorization: `Bearer ${token}` },
    );

    if (!response?.data?.success) {
      throw new Error("Invalid Response");
    }

    result = response?.data?.data;
  } catch (err) {
    console.log("GET SECTION BY ID API ERROR", err);
    toast.error(getErrorMessage(err));
  }

  return result;
};

/* ============================
   GET SECTIONS BY BLOG ID
============================ */
export const getSectionsByBlogId = async (token, blogId) => {
  let result = [];

  try {
    const response = await apiConnector(
      "GET",
      sectionsEndPoints.GET_SECTIONS_BY_BLOG_ID.replace(":blogId", blogId),
      null,
      { Authorization: `Bearer ${token}` },
    );

    if (!response?.data?.success) {
      throw new Error("Invalid Response");
    }

    result = response?.data?.data;
  } catch (err) {
    console.log("GET SECTIONS BY BLOG ID API ERROR", err);
    toast.error(getErrorMessage(err));
  }

  return result;
};
