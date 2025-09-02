import axios from "axios";

async function getSingleKata(kata_id) {
  try {
    const response = await axios.get(
      `https://kata-quest.onrender.com/api/katas/${kata_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getSingleKata;
