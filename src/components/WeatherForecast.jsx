
import React from 'react';

function WeatherForecast({ forecast, isCelsius }) {
  return (
    <div className="weather-forecast">
      <h2>5-Day Forecast</h2>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            <p>{day.day}</p>
            <p>
              {isCelsius ? day.temp : (day.temp * 9) / 5 + 32}° {isCelsius ? "C" : "F"}
            </p>
            <p>{day.icon}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherForecast;
