import axios from "axios";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/`;
const CURR_URL = `${WEATHER_URL}weather`;
const FORECAST_URL = `${WEATHER_URL}forecast`;
const API_KEY = `da0a70994cfe9192710bcd3360906f0c`;
export async function fetchLocationByCoords(geoData) {
  if (!geoData?.longitude || !geoData?.latitude) return;

  const params = {
    lon: geoData.longitude,
    lat: geoData.latitude,
    units: "metric",
    appid: API_KEY,
  };
  const [current, forecast] = await Promise.all([
    axios.get(CURR_URL, {
      params,
    }),
    axios.get(FORECAST_URL, { params }),
  ]);
  return { currentWeather: current.data, forecast: forecast.data };
}
export async function fetchSearchParam(searchQuery) {
  if (!searchQuery) return;

  const params = {
    q: searchQuery,
    units: "metric",
    appid: API_KEY,
  };
  const [current, forecast] = await Promise.all([
    axios.get(CURR_URL, {
      params,
    }),
    axios.get(FORECAST_URL, { params }),
  ]);

  return { currentWeather: current.data, forecast: forecast.data };
}
