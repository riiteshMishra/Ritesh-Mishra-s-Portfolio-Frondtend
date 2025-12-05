import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { projectsEndpoints } from "../allApis";

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
