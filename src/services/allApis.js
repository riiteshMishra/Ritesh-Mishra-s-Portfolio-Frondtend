// user auth routes
export const authEndPoints = {
  SEND_OTP_API: "/auth/send-otp",
  SIGN_UP_API: "/auth/sign-up",
  LOG_IN_API: "/auth/log-in",
  CHANGE_PASSWORD_API: "/auth/change-password",
  GENERATE_RESET_PASSWORD_TOKEN: "/auth/generate-reset-password-token",
  RESET_PASSWORD_API: "/auth/reset-password/:token",
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
  CREATE_CATEGORY_API: "/create-category",
  UPDATE_CATEGORY_API: "/update-category",
  DELETE_CATEGORY_API: "/delete-category",
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
};

// reviews endpoints
export const reviewsEndpoints = {
  CREATE_REVIEW: "/reviews/create-review",
  UPDATE_REVIEW: "/reviews/update-review",
  GET_CLIENT_REVIEW: "/reviews/get-client-review",
  GET_AUTHORIZED_REVIEWS: "/reviews/get-all-reviews",
};
