import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faBolt, faCloudMoon } from '@fortawesome/free-solid-svg-icons';

const ForecastMaxi = () => {
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

  const getNextSevenDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString('en-US', { weekday: 'long' }));
    }
    return days;
  };

  const days = getNextSevenDays();

  return (
    <div>
      {/* Scrollable Forecast Section */}
      <div className="space-y-6 p-4">
        {days.map((day, dayIndex) => (
          <div key={dayIndex}>
            <div className="text-center font-bold p-2 mr-2 border underline rounded-lg sm:text-base md:text-xl lg:text-2xl inline">{day}</div>
            <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
              {forecasts.map((forecast, index) => (
                <div key={index} className="sm:min-w-[80px] md:min-w-[130px] lg:min-w-[170px] text-center border p-2 rounded-lg shadow-sm mt-4 bg-white/30 border-white/20">
                  <span className="block sm:text-xs md:text-base lg:text-lg">{forecast.time}</span>
                  <FontAwesomeIcon icon={forecast.icon} className="sm:text-2xl md:text-4xl lg:text-5xl my-2" />
                  <span className="block sm:text-base md:text-lg lg:text-2xl font-bold">{forecast.temp}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastMaxi;