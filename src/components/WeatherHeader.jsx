import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherHeader = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://skycast-backend-live.onrender.com/this-weather');
        const data = await response.json();
        setWeatherData(data.weather.current);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

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
        <span className="sm:text-sm md:text-2xl lg:text-3xl font-medium">Lagos NG</span>
        <FontAwesomeIcon 
          icon={faMapMarkerAlt} 
          className="sm:2xl md:text-3xl lg:text-4xl"
        />
      </div>

      {/* Weather Icon */}
      <div>
        <FontAwesomeIcon
          icon={faCloudShowersHeavy}
          className="text-sm sm:text-6xl md:text-8xl lg:text-9xl"
        />
      </div>
    </div>
  );
};

export default WeatherHeader;