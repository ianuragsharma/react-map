import React from "react";
import { weatherData } from "../data";
const WeatherReport = () => {
  const weatherList = weatherData.map((weather) => (
    <div key={weather.id} className="weather-items">
      <span className="weather-icon">{<weather.icon size={25} />}</span>
      <span className="weather-icon">{weather.title}</span>
      <div className="divider"></div>
    </div>
  ));
  return (
    <div className="weather-container component-wrapper">{weatherList}</div>
  );
};

export { WeatherReport };
