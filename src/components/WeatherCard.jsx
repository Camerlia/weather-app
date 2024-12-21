import { WEATHER_CONDITIONS } from "../services/api";
import { setDateFormat } from "../utils";

/* eslint-disable react/prop-types */
const WeatherCard = ({ data }) => {
  const { name, main, sys, weather,wind } = data;
  return (
    <div className="flex flex-col gap-3 mt-6 max-w-screen-sm m-auto mb-4">
      <h2 className="text-3xl font-bold text-black mb-4">
        {name}
        {sys.country}
      </h2>
      <h3 className="text-sm">{setDateFormat()}</h3>
      <h3 className="mt-3 mb-4 font-semibold">Current Weather</h3>
      <div className="flex items-center justify-center mb-4">
        <img
          src={`${WEATHER_CONDITIONS}${weather[0].icon}@2x.png`}
          alt={weather.description}
        />
        <span className="text-4xl font-bold pr-6">
          {Math.round(main.temp)}
          <sup>&deg;C</sup>
        </span>
        <div className="text-right">
          <span className="block font-semibold">{weather[0].main}</span>
        </div>
        
      </div>
      <div className=' flex justify-between text-sm md:w-full max-w-md m-auto gap-4'>
        <div>
            Wind <br/> {Math.round(wind.speed)}
        </div>
        <div>
            Humidity <br/> {wind.humidity}%
        </div>
        <div>
            Pressure <br/> {wind.pressure}mb
        </div>
        </div>
    </div>
  );
};

export default WeatherCard;
