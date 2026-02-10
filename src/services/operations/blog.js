import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { blogsEndPoints, blogsFunctionEndpoints } from "../allApis";

// { Authorization:`Bearer ${token}`}

//  Error Handler
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

// GET BLOG BY SLUG
export const getBlogBySlug = async (slug) => {
  // const toastId = toast.loading
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      `${blogsEndPoints.GET_BLOG_BY_ID}${slug}`,
    );
    console.log("GET BLOG BY ID API RESPONSE", response);
    if (!response.data.success)
      return toast.error(getErrorMessage("Invalid response"));
    // console.log("GET BLOG BY ID API RESPONSE", response);
    result = response.data.blog;
    // toast.success("Blog fetched successful");
  } catch (err) {
    console.log("GET BLOG BY ID API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err.message));
  } finally {
    return result;
  }
};

export const toggleBlogLike = async (userId, blogId, token) => {
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      `${blogsFunctionEndpoints.TOGGLE_BLOG_LIKE}${blogId}`,
      { userId: userId },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log("TOGGLE BLOG API RESPONSE", response);

    if (!response.data.success) return toast.error("Invalid api response");

    result = response.data;
  } catch (err) {
    console.log("TOGGLE BLOG LIKE API ERROR RESPONSE", err);
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};

// add comment
export const addComment = async (blogId, formData, token) => {
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      `${blogsFunctionEndpoints.ADD_COMMENT_API.replace(":blogId", blogId)}`,
      formData,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    console.log("ADD COMMENT API RESPONSE", response);

    if (!response.data.success) throw new Error("Invalid response");

    result = response.data;
    toast.success("Comment added successfully");
  } catch (err) {
    toast.error(getErrorMessage(err));
  } finally {
    return result;
  }
};

// get all liked blogs
export const getAllLikedBlogs = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      blogsEndPoints.GET_ALL_LIKED_BLOGS,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );

    if (!response.data?.success) {
      throw new Error("Invalid response");
    }

    console.log("GET LIKED BLOGS API RESPONSE", response);

    return response.data.likedBlogsDetails || [];
  } catch (err) {
    console.log("GET ALL LIKED BLOG API ERROR", err);
    toast.error(getErrorMessage(err));
    return [];
  }
};
