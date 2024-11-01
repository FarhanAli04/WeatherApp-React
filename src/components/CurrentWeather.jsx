import React from 'react';

function CurrentWeather({ data, isCelsius }) {
  const temperature = isCelsius ? data.temperature : (data.temperature * 9) / 5 + 32;

  return (
    <div className="current-weather">
      <h2>Current Weather in {data.city}</h2>
      <p>Temperature: {temperature}° {isCelsius ? "C" : "F"}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
      <p>{data.icon}</p>
    </div>
  );
}

export default CurrentWeather;
