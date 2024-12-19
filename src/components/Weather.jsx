import { useState } from "react";
import { useFetchLocation } from "../hooks/useFetchLocation";
import useGeoLocation from "../hooks/useGeoLocation";

const Weather = () => {
  const {
    data: weatherData,
    loading: weatherLoading,
    error: weatherError,
  } = useGeoLocation();
  const {
    data: apiData,
    loading: apiLoading,
    error: apiError,
  } = useFetchLocation(weatherData);
  const [city, setCity] = useState("");
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

  const { currentWeather } = apiData || {};
  return (
    <div className="">
      <form>
        <input
        className="p-2 border border-black/10 rounded-md"
          placeholder="input a city name"
          value={city}
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="p-2 rounded-md bg-zinc-700 ml-2" type="button">Submit</button>
      </form>
      {currentWeather && (
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-black mb-4">
            Current Weather for {currentWeather.name}{" "}
          </h2>
          <p className="text-2xl font-bold">
            {Math.round(currentWeather.main.temp)}&deg;C
          </p>
          <p className="capitalize">{currentWeather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
