import { useState } from "react";
import { useFetchLocation } from "../hooks/useFetchLocation";
import useGeoLocation from "../hooks/useGeoLocation";

const Weather = () => {
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: geoData,
    loading: weatherLoading,
    error: weatherError,
  } = useGeoLocation();
  const {
    data,
    loading: apiLoading,
    error: apiError,
  } = useFetchLocation(geoData, searchQuery);

  {
    apiError && <p>{apiError.message}</p>;
  }
  if (weatherError) {
    return (
      <p className="text-lg text-red-700 p-4 bg-red-200">
        Error: {weatherError.message}
      </p>
    );
  }
  if (weatherLoading) {
    return <p className="text-lg text-blue-700 p-4 bg-blue-200">Loading....</p>;
  }

  const { currentWeather, forecast } = data || {};
  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim()) {
      console.log("city:", city);
      setSearchQuery(city.trim());
    }
  }
  return (
    <div className=" min-h-screen">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 border border-black/10 rounded-md"
          placeholder="input a city name"
          value={city}
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="p-2 rounded-md bg-zinc-700 ml-2" type="submit">
          Submit
        </button>
      </form>
      {currentWeather && (
        <div className="mt-6 max-w-screen-sm m-auto mb-4">
          <h2 className="text-3xl font-bold text-black mb-4">
            Current Weather for {currentWeather.name}{" "}
          </h2>
          <p className="text-2xl font-bold">
            {Math.round(currentWeather.main.temp)}&deg;C
          </p>
          <p className="capitalize">{currentWeather.weather[0].description}</p>
        </div>
      )}
      {forecast && (
        <div className="bg-zinc-200 p-4 rounded-lg shadow-lg max-w-screen-sm m-auto">
          <h2 className="text-lg font-semibold mb-4">Forecast</h2>
          <ul className="space-y-4">
            {forecast.list.slice(0, 5).map((forecastList, index) => (
              <li key={index} className="bg-zinc-100 p-4 rounded-lg shadow-md ">
                <p className="text-lg font-semibold">
                  Forecast: {forecastList.dx_text}
                </p>
                <p className="text-2xl font-bold">
                  {Math.round(forecastList.main.temp)}&deg;C
                </p>
                <p className="capitalize">
                  Weather: {forecastList.weather[0].description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Weather;
