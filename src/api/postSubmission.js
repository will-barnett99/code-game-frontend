import axios from "axios";

const postSubmission = async (userData) => {
  try {
    const response = await axios.post(
      "https://kata-quest.onrender.com/api/submission",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error posting submission:", error);
    throw error;
  }
};

export default postSubmission;
