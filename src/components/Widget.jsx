import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faTint, faWind, faThermometerThreeQuarters, faTachometerAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const Widget = () => {
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

  const widgets = [
    { icon: faSun, label: "UV Index", value: weatherData ? weatherData.uvi : '--' },
    { icon: faTint, label: "Humidity", value: weatherData ? `${weatherData.humidity}%` : '--' },
    { icon: faWind, label: "Wind", value: weatherData ? `${weatherData.wind_speed} mph` : '--' },
    { icon: faThermometerThreeQuarters, label: "Dew Point", value: weatherData ? `${weatherData.dew_point}°` : '--' },
    { icon: faTachometerAlt, label: "Pressure", value: weatherData ? `${weatherData.pressure} hPa` : '--' },
    { icon: faEye, label: "Visibility", value: weatherData ? `${weatherData.visibility / 1000} km` : '--' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:m-4 sm:m-2">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className="items-center bg-white px-3 py-2 shadow-md bg-white/30 backdrop-blur-md border border-white/20 rounded-lg"
        >
          <div className='flex items-center mb-1 '>
            <FontAwesomeIcon icon={widget.icon} className="sm:text-xs md:text-base lg:text-xl mr-2" />
            <div className="sm:text-xs md:text-base lg:text-xl font-semibold text-gray-600 dark:text-gray-300">{widget.label}</div>
          </div>
          <div className="sm:text-base md:text-xl lg:text-3xl font-bold">{widget.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Widget;