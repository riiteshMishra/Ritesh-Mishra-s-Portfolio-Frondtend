import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { subSectionsEndPoints } from "../allApis";
import { setBlog } from "../../slices/blog";

// ================= HELPERS =================
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err?.message || fallback;

const getSuccessMessage = (response, fallback = "Process Done") =>
  response?.data?.message || fallback;

// ================= CREATE SUB SECTION =================
export const createSubSection = async (formData, token, dispatch) => {
  const toastId = toast.loading("Creating sub section...");
  let result = null;

  try {
    const response = await apiConnector(
      "POST",
      subSectionsEndPoints.CREATE_SUB_SECTION,
      formData,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    );
    
    console.log("CREATE SUB SECTION API RESPONSE", response);

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    // backend agar updated blog bheje
    if (response?.data?.data) {
      dispatch(setBlog(response?.data?.data));
    }

    toast.success(getSuccessMessage(response, "Sub section created"));
    result = response.data;
  } catch (err) {
    toast.error(getErrorMessage(err, "Failed to create sub section"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// ================= UPDATE SUB SECTION =================
export const updateSubSection = async (formData, token, dispatch) => {
  const toastId = toast.loading("Updating sub section...");
  let result = null;

  try {
    const response = await apiConnector(
      "PATCH",
      subSectionsEndPoints.UPDATE_SUB_SECTION,
      formData,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    if (response?.data?.data) {
      dispatch(setBlog(response.data.data));
    }

    toast.success(getSuccessMessage(response, "Sub section updated"));
    result = response.data;
  } catch (err) {
    toast.error(getErrorMessage(err, "Failed to update sub section"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// ================= DELETE SUB SECTION =================
export const deleteSubSection = async (subSectionId, token, dispatch) => {
  const toastId = toast.loading("Deleting sub section...");
  let result = null;

  try {
    const response = await apiConnector(
      "DELETE",
      subSectionsEndPoints.DELETE_SUB_SECTION.replace(
        ":subSectionId",
        subSectionId,
      ),
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    if (response?.data?.data) {
      dispatch(setBlog(response.data.data));
    }

    toast.success(getSuccessMessage(response, "Sub section deleted"));
    result = response.data;
  } catch (err) {
    toast.error(getErrorMessage(err, "Failed to delete sub section"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// ================= GET SUB SECTION BY ID =================
export const getSubSectionById = async (subSectionId, token) => {
  const toastId = toast.loading("Fetching sub section...");
  let result = null;

  try {
    const response = await apiConnector(
      "GET",
      subSectionsEndPoints.GET_SUB_SECTION_BY_ID.replace(
        ":subSectionId",
        subSectionId,
      ),
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    result = response.data.data;
  } catch (err) {
    toast.error(getErrorMessage(err, "Failed to fetch sub section"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};

// ================= GET SUB SECTIONS BY SECTION ID =================
export const getSubSectionsBySectionId = async (sectionId, token) => {
  const toastId = toast.loading("Fetching sub sections...");
  let result = null;

  try {
    const response = await apiConnector(
      "GET",
      subSectionsEndPoints.GET_SUB_SECTIONS_BY_SECTION_ID.replace(
        ":sectionId",
        sectionId,
      ),
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response?.data?.success) {
      throw new Error(response?.data?.message);
    }

    result = response.data.data;
  } catch (err) {
    toast.error(getErrorMessage(err, "Failed to fetch sub sections"));
  } finally {
    toast.dismiss(toastId);
  }

  return result;
};
