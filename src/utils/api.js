import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    // q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// const options = {
//   method: "GET",
//   url: "https://youtube138.p.rapidapi.com/auto-complete/",
//   params: {
//     q: "desp",
//     hl: "en",
//     gl: "US",
//   },
//   headers: {
//     "X-RapidAPI-Key": "0e21e4b20fmsh67304211be38387p1359bfjsn5f6f64698c9b",
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

export const fetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
