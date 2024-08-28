// src/components/ForecastMini.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faBolt, faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ForecastMini = () => {
  const forecasts = [
    { time: "5:00 PM", icon: faCloudShowersHeavy, temp: "27°C" },
    { time: "6:00 PM", icon: faCloudShowersHeavy, temp: "25°C" },
    { time: "7:00 PM", icon: faCloudShowersHeavy, temp: "26°C" },
    { time: "8:00 PM", icon: faBolt, temp: "24°C" },
    { time: "9:00 PM", icon: faCloudMoon, temp: "32°C" },
    { time: "10:00 PM", icon: faCloudMoon, temp: "30°C" },
  ];

  return (
    <div className="p-4 bg-white">
      {/* Days Section */}
      <div className="flex items-center mb-4">
        <button className="text-center font-bold p-2 mr-2 border underline rounded-lg sm:text-base md:text-xl lg:text-2xl">
          Today
        </button>
        <Link to="/forecast" className="text-center text-gray-800 font-bold p-2 border rounded-lg underline sm:text-base md:text-xl lg:text-2xl">
          Tomorrow
        </Link>
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