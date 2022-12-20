import axios from 'axios';

const { VITE_BACKEND_URL, VITE_API_KEY } = import.meta.env;
export const getAllVideoGames = async (page: number, page_size: number) => {
  try {
    const { data } = await axios(
      `${VITE_BACKEND_URL}games?key=${VITE_API_KEY}&page=${page}&page_size=${page_size}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
