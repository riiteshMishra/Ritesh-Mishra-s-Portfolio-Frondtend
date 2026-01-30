// user auth routes
export const authEndPoints = {
  SEND_OTP_API: "/auth/send-otp",
  SIGN_UP_API: "/auth/sign-up",
  LOG_IN_API: "/auth/log-in",
  CHANGE_PASSWORD_API: "/auth/change-password",
  GENERATE_RESET_PASSWORD_TOKEN: "/auth/generate-reset-password-token",
  RESET_PASSWORD_API: "/auth/reset-password/",
};

// blogs api
export const blogsEndPoints = {
  CREATE_BLOG_API: "/blogs/create-blog",
  UPDATE_BLOG_API: "blogs/update-blog",
  DELETE_BLOG_API: "blogs/delete-blog/:blogId",
  GET_ALL_BLOGS: "blogs/get-all-blogs",
  GET_USER_BLOGS: "/blogs/user-blogs",
  GET_BLOG_BY_ID: "/blogs/blog-details/",
  GET_ALL_LIKED_BLOGS: "/blogs/get-liked-blogs",
};

// categories
export const categoryEndPoints = {
  CREATE_CATEGORY_API: "category/create-category",
  UPDATE_CATEGORY_API: "category/update-category",
  DELETE_CATEGORY_API: "category/delete-category",
  GET_ALL_CATEGORIES_API: "/category/find-all-categories",
};

// blog like dislike
export const blogsFunctionEndpoints = {
  // GET_BLOG_BY_ID: "/blogs/blog-details/",
  TOGGLE_BLOG_LIKE: "/blogs/toggle-blog-like/",
  ADD_COMMENT_API: "/blogs/blog/:blogId/comment",
  UPDATE_COMMENT_API: "/blogs/update-comment/:blogId", // PENDING
  DELETE_COMMENT_API: "/blogs/delete-comment", // PENDING
};

export const profileEndpoints = {
  UPDATE_PROFILE_PICTURE: "/profile/update-profile-picture",
  UPDATE_PROFILE_DETAILS: "/profile/update-profile",
};

// contact - us
export const contactUsEndpoints = {
  RAISE_REQUEST: "/profile/create-request",
  GET_ALL_REQUEST: "/profile/client-requests",
  UPDATE_REQUEST: "/profile/form-status-update",
  DELETE_REQUESTS: "/profile/delete-requests",
};

// reviews endpoints
export const reviewsEndpoints = {
  CREATE_REVIEW: "/reviews/create-review",
  UPDATE_REVIEW: "/reviews/update-review",
  GET_CLIENT_REVIEW: "/reviews/get-client-review",
  GET_AUTHORIZED_REVIEWS: "/reviews/get-all-reviews",
  GET_NON_APPROVED_REVIEWS: "/reviews/get-non-approved-reviews",
  TOGGLE_REVIEW: "/reviews/toggle-review",
};

// project endpoints
export const projectsEndpoints = {
  CREATE_PROJECT_API: "/projects/create-project",
  UPDATE_PROJECT_API: "/project/update-project/:projectId",
  DELETE_PROJECT_API: "/project/delete-project/:projectId",
  GET_ALL_PROJECTS_API: "/projects/get-all-projects",
};

// SECTION
export const sectionsEndPoints = {
  CREATE_SECTION: "/profile/create-section",
  UPDATE_SECTION: "/profile/update-section",
  DELETE_SECTION: "/profile/delete-section/:sectionId",
  GET_SECTION_BY_ID: "/profile/section/:sectionId",
  GET_SECTIONS_BY_BLOG_ID: "/profile/sections/:blogId",
};

// SUB SECTION
export const subSectionsEndPoints = {
  CREATE_SUB_SECTION: "/profile/create-sub-section",
  UPDATE_SUB_SECTION: "/profile/update-sub-section",
  DELETE_SUB_SECTION: "/profile/delete-sub-section/:subSectionId",
  GET_SUB_SECTION_BY_ID: "/profile/sub-section/:subSectionId",
  GET_SUB_SECTIONS_BY_SECTION_ID: "/profile/sub-sections/:sectionId",
};
