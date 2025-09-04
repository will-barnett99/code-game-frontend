import axios from "axios";

async function getTags(kata_id) {
  try {
    const response = await axios.get(
      `https://kata-quest.onrender.com/api/katas/${kata_id}/tags`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getTags;
