import axios from "axios";

// Base axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
  withCredentials: true, // cookies / JWT ke liye
});

// apiConnector function
export const apiConnector = (method, url, body, headers, params) => {
  return axiosInstance({
    method: method,
    url: url,
    data: body ? body : null, // POST/PUT ka data
    headers: headers ? headers : {},
    params: params ? params : {},
  });
};
