import axios from "axios";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/`;
const CURR_URL = `${WEATHER_URL}weather`;
const API_KEY = `da0a70994cfe9192710bcd3360906f0c`;
export async function fetchLocationByCoords(geoData) {
  if (!geoData?.longitude || !geoData?.latitude) return;

  const responds = await axios.get(CURR_URL, {
    params: {
      lon: geoData.longitude,
      lat: geoData.latitude,
      units: "metric",
      appid: API_KEY,
    },
  });
  console.log(responds);
  return { currentWeather: responds.data };
}
export async function fetchSearchParam(searchQuery) {
  if (!searchQuery) return;

  const responds = await axios.get(CURR_URL, {
    params: {
      q:searchQuery,
      units: "metric",
      appid: API_KEY,
    },
  });
  console.log(responds);
  return { currentWeather: responds.data };
}
