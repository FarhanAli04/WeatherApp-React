import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import TemperatureToggle from './TemperatureToggle';
import { dummyWeatherData } from '../dummyWeatherData';

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(dummyWeatherData);
  const [isCelsius, setIsCelsius] = useState(true);

  // Handle city search and update weather data
  const handleCitySearch = (city) => {
    console.log("Fetching weather for city:", city);
    setWeatherData(dummyWeatherData); // For now, using dummy data
  };

  // Toggle between Celsius and Fahrenheit
  const handleTemperatureToggle = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      <CitySearch onCitySearch={handleCitySearch} />
      <TemperatureToggle isCelsius={isCelsius} onToggle={handleTemperatureToggle} />
      <CurrentWeather data={weatherData.current} isCelsius={isCelsius} />
      <WeatherForecast forecast={weatherData.forecast} isCelsius={isCelsius} />
    </div>
  );
}

export default WeatherDashboard;
