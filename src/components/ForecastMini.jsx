// src/components/ForecastMini.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faBolt, faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ForecastMini = () => {
  const generateForecasts = () => {
    const forecasts = [];
    const now = new Date();
    for (let i = 1; i <= 24; i++) {
      const forecastTime = new Date(now);
      forecastTime.setHours(now.getHours() + i);
      const timeString = forecastTime.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
      const temp = `${Math.floor(Math.random() * 10) + 20}°C`; // Random temperature between 20°C and 29°C
      const icon = i % 3 === 0 ? faBolt : (i % 2 === 0 ? faCloudShowersHeavy : faCloudMoon); // Alternate icons
      forecasts.push({ time: timeString, icon, temp });
    }
    return forecasts;
  };

  const forecasts = generateForecasts();

  return (
    <div className="p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg md:m-4 sm:m-2">
      {/* Days Section */}
      <div className='flex justify-between mb-2'>
        <div className="flex items-center mb-4">
          <button className="text-center font-bold p-2 mr-2 border underline rounded-lg sm:text-base md:text-xl lg:text-2xl">
            Today
          </button>
          <Link to="/forecast" className="text-center text-gray-800 font-bold p-2 border rounded-lg underline sm:text-base md:text-xl lg:text-2xl">
            Tomorrow
          </Link>
        </div>
        <div className="bg-white/30 border border-white/20 rounded-full flex items-center p-4">
          <lord-icon
            src="https://cdn.lordicon.com/xkmjbjuw.json"
            trigger="loop"
            delay="2000"
            className="sm:text-base md:text-xl lg:text-2xl dark:text-lime-50">
          </lord-icon>
        </div>
      </div>

      {/* Scrollable Forecast Section */}
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {forecasts.map((forecast, index) => (
          <div key={index} className="sm:min-w-[80px] md:min-w-[130px] lg:min-w-[170px] text-center border p-2 rounded-lg shadow-sm">
            <span className="block sm:text-xs md:text-base lg:text-lg">{forecast.time}</span>
            <FontAwesomeIcon icon={forecast.icon} className="sm:text-2xl md:text-4xl lg:text-5xl my-2" />
            <span className="block sm:text-base md:text-lg lg:text-2xl font-bold">{forecast.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastMini;