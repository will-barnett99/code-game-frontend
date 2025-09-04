import axios from "axios";

async function getKataContent(kata_id, params) {
  try {
    const response = await axios.get(
      `https://kata-quest.onrender.com/api/katas/${kata_id}/${params}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getKataContent;
