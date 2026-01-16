import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { projectsEndpoints } from "../allApis";
import { setProjectData } from "../../slices/project";

// error message
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

export const createProject = async (formData, token, dispatch) => {
  try {
    const response = await apiConnector(
      "POST",
      projectsEndpoints.CREATE_PROJECT_API,
      formData,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("CREATE PROJECT API RESPONSE", response);
    toast.success(response?.data?.message);
  } catch (err) {
    console.log("CREATE PROJECT API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  }
};

// get projects open api
export const getAllProjects = async (dispatch) => {
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      projectsEndpoints.GET_ALL_PROJECTS_API
    );

    console.log("GET ALL PROJECTS API RESPONSE", response);
    result = response?.data;
    // dispatch(setProjectData(result));
  } catch (err) {
    console.log("GET ALL PROJECTS API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};

// GET PROJECT ADMIN API
export const adminProject = async (token, dispatch) => {
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      projectsEndpoints.GET_ALL_PROJECTS_API
    );

    console.log("GET ALL PROJECTS API RESPONSE", response);
    result = response?.data?.data;
    dispatch(setProjectData(result));
  } catch (err) {
    console.log("GET ALL PROJECTS API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};
