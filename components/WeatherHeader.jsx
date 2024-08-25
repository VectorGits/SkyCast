import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Temperature and Condition */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">27°C</span>
        <span className="text-sm text-gray-600">Partly Cloudy</span>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-medium">Lagos NG</span>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
      </div>

      {/* Weather Icon */}
      <div>
        <FontAwesomeIcon icon={faCloudShowersHeavy} className="text-5xl" />
      </div>
    </div>
  );
};

export default WeatherHeader;
