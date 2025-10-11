import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { blogsEndPoints, blogsFunctionEndpoints } from "../allApis";

//  Error Handler
const getErrorMessage = (err, fallback = "Something went wrong") =>
  err?.response?.data?.message || err.message || fallback;

export const getBlogById = async (blogId) => {
  // const toastId = toast.loading
  let result = [];
  try {
    const response = await apiConnector(
      "GET",
      `${blogsEndPoints.GET_BLOG_BY_ID}${blogId}`
    );

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

export const toggleBlogLike = async (userId, blogId) => {
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      `${blogsFunctionEndpoints.TOGGLE_BLOG_LIKE}${blogId}`,
      { userId: userId }
    );

    console.log("TOGGLE BLOG API RESPONSE", response);

    if (!response.data.success) return toast.error("Invalid api response");

    result = response.data;
  } catch (err) {
    console.log("TOGGLE BLOG LIKE API ERROR RESPONSE", err);
    toast.error(err);
  } finally {
    return result;
  }
};

// add comment
export const addComment = async (userId, blogId, formData) => {
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      `${blogsFunctionEndpoints.ADD_COMMENT_API.replace(":blogId", blogId)}`,
      formData
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

// // GET ALL COMMENTS FOR SINGLE BLOG
// export const getAllCommentsById = async (blogId)=>{
//   let result =[];
//   try{
// const response = await apiConnector("GET",blogsEndPoints)
//   }catch(err){
//    toast.error(getErrorMessage(err))
//   }finally{
//     return result
//   }
// }