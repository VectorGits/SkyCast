import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faBolt, faCloudMoon, faSun, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ForecastMini = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch('https://skycast-backend-live.onrender.com/this-weather');
        const data = await response.json();
        setForecastData(data.weather.hourly.slice(0, 24)); // Assuming the API returns an hourly forecast array
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
    const interval = setInterval(fetchForecastData, 3600000); // Update every hour

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const getIcon = (weather, dt) => {
    const hour = new Date(dt * 1000).getHours();
    if (weather.main === 'Thunderstorm') return faBolt;
    if (weather.main === 'Rain' || weather.main === 'shower rain') return faCloudShowersHeavy;
    if (weather.main === 'scattered clouds' || weather.main === 'Clouds') return faCloud;
    if (weather.main === 'clear sky') return faSun;
    if (hour >= 7 && hour <= 18) return faSun;
    return faCloudMoon;
  };

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
        {forecastData.map((forecast, index) => (
          <div key={index} className="sm:min-w-[80px] md:min-w-[130px] lg:min-w-[170px] text-center border p-2 rounded-lg shadow-sm">
            <span className="block sm:text-xs md:text-base lg:text-lg">
              {new Date(forecast.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}
            </span>
            <FontAwesomeIcon icon={getIcon(forecast.weather[0], forecast.dt)} className="sm:text-2xl md:text-4xl lg:text-5xl my-2" />
            <span className="block sm:text-base md:text-lg lg:text-2xl font-bold">
              {`${Math.round(forecast.temp)}°C`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastMini;