import axios from "axios";

// const API_URL = "http://localhost:4646/api/auth"; // Your backend URL
const API_URL = "http://127.0.0.1:8000/user"; // Your backend URL
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup/`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Server Error";
  }
};
export const testApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/login/`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Server Error";
  }
};
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Server Error";
  }
};
// export const refreshToken = async () => {
//   try {
//     const response = await axios.post(`${API_URL}/refresh`);
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : "Server Error";
//   }
// };
// export const changePasswordasync = async ( credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/changePassword`, credentials);
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : "Server Error";
//   }
// };
// export const resetPassword = async (data) => {
//   try {
//     const response = await axios.post(`${API_URL}/resetPassword`, data);
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : "Server Error";
//   }
// };
// export const resendConfirmationEmail = async (email) => {
//   try {
//     const response = await axios.post(`${API_URL}/resendConfirmationEmail`, { email });
//     return response.data;
//   } catch (error) {
//     throw error.response ? error.response.data : "Server Error";
//   }
// };
