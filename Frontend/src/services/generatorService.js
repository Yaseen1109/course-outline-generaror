import axios from "axios";

const API_URL = "http://127.0.0.1:8000/generator"; // Your Django backend URL

export const generateOutline = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Server Error";
  }
};
