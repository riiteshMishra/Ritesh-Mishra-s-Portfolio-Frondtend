const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
console.log("Base_url", BASE_URL);
// user auth routes
export const authEndPoints = {
  SEND_OTP_API: `${BASE_URL}/auth/send-otp`,
  SIGN_UP_API: "/auth/sign-up",
  LOG_IN_API: "/auth/log-in",
  CHANGE_PASSWORD_API: "/auth/change-password",
  GENERATE_RESET_PASSWORD_TOKEN: "/auth/generate-reset-password-token",
  RESET_PASSWORD_API: "/auth/reset-password/:token",
};
