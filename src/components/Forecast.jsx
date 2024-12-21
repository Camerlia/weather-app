import { getShortDateFormat } from "../utils";
import { WEATHER_CONDITIONS } from "../services/api";

const Forecast = ({ forecast }) => {
  return (
    <div className="bg-zinc-200 p-4 rounded-lg shadow-lg md:max-w-screen-lg m-auto">
      <h2 className="text-lg font-semibold mb-4">Forecast</h2>
      <div className="flex flex-wrap  justify-between gap-4">
        {forecast.list.slice(0, 5).map((forecastList, index) => {
          const { dt, weather, main } = forecastList;
          return (
            <div
              key={index}
              className="bg-zinc-100 p-4 rounded-lg shadow-md m-auto md:m-0 w-56"
            >
              <p className="text-base md:text-lg font-semibold">
                Forecast:{" "}
                <span className="font-normal">{getShortDateFormat(dt)}</span>
              </p>
              <div>
                <img
                className="bg-blue-500 rounded-lg m-auto my-2"
                  src={`${WEATHER_CONDITIONS}${weather[0].icon}.png`}
                  alt={weather.description}
                />
              </div>
              <p className="text-2xl font-bold">
                {Math.round(main.temp)}&deg;C
              </p>
              <p className="font-semibold">{weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
