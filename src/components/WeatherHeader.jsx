import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg m-4 sm:m-2">
      {/* Temperature and Condition */}
      <div className="flex flex-col items-center">
        <span className="sm:text-3xl md:text-5xl lg:text-7xl font-bold">27°C</span>
        <span className="text-sm text-gray-600">Partly Cloudy</span>
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
