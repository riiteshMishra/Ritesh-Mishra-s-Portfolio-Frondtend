import axios from "axios";

// Base axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // automatically base URL
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
