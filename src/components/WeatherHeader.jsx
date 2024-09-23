import React, { useState, useEffect } from 'react';
import useWeatherIcon from '../hooks/useWeatherIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherHeader = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLocation, setWeatherLocation] = useState({ city: '--', country: '--' });
  const [iconCode, setIconCode] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://skycast-backend-live.onrender.com/this-weather');
        const data = await response.json();
        setWeatherData(data.weather.current);
        setWeatherLocation(data.location);
        setIconCode(data.weather.current.weather[0].icon); // Set the icon code from the API response
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const weatherIcon = useWeatherIcon(iconCode); // Pass the icon code to the custom hook

  return (
    <div className="flex justify-between items-center p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg m-4 sm:m-2">
      {/* Temperature and Condition */}
      <div className="flex flex-col items-center">
        <span className="sm:text-3xl md:text-5xl lg:text-7xl font-bold">
          {weatherData ? `${Math.round(weatherData.temp)}°C` : '--'}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {weatherData ? weatherData.weather[0].description : '--'}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-2">
        <span className="sm:text-sm md:text-2xl lg:text-3xl font-medium">{weatherLocation.city} {weatherLocation.country}</span>
        <FontAwesomeIcon 
          icon={faMapMarkerAlt} 
          className="sm:2xl md:text-3xl lg:text-4xl"
        />
      </div>

      {/* Weather Icon */}
      <div className="text-sm sm:text-6xl md:text-8xl lg:text-9xl">
        {weatherIcon}
      </div>
    </div>
  );
};

export default WeatherHeader;