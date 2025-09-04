import axios from "axios";

async function getKatas() {
  try {
    const response = await axios.get(
      "https://kata-quest.onrender.com/api/katas"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getKatas;
