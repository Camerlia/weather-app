import { useState } from "react";
import { useFetchLocation } from "../hooks/useFetchLocation";
import useGeoLocation from "../hooks/useGeoLocation";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

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
    // eslint-disable-next-line no-unused-vars
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
      {currentWeather && <WeatherCard data={currentWeather} />}
      {forecast && <Forecast forecast={forecast}/>}
    </div>
  );
};

export default Weather;
