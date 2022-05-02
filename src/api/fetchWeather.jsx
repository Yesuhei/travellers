import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "1c981d064934c2422426715f37593b26";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};

export const fetchData = async () => {
  // try {
  //     const { data } = await axios.get("https://travellersmn.herokuapp.com/places");
  //     console.log("incoming res== ", data);
  //     return data;

  // } catch (error) {
  //     console.log("err =>", error);
  // }
  return axios
    .get("https://travellersmn.herokuapp.com/places", { mode: "no-cors" })
    .then((res) => {
      console.log("data res == ", res);
      return res.data;
    })
    .catch((err) => console.log("err == ", err));
};
