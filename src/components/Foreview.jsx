import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCloudShowersHeavy, faBolt } from '@fortawesome/free-solid-svg-icons';

const Foreview = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch('https://skycast-backend-live.onrender.com/this-weather');
        const data = await response.json();
        setForecastData(data.weather.daily.slice(0, 5)); // Assuming the API returns a daily forecast array
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
  }, []);

  const getNextFiveDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayName = i === 0 ? "Today" : nextDay.toLocaleDateString('en-US', { weekday: 'long' });
      days.push(dayName);
    }
    return days;
  };

  const days = getNextFiveDays();

  return (
    <div className="p-4 bg-white shadow-md bg-white/30 backdrop-blur-md border border-white/20 rounded-lg md:m-4 sm:m-2">
      <table className="w-full">
        <tbody>
          {days.map((day, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-2 sm:text-xs md:text-lg lg:text-2xl">{day}</td>
              <td className="py-2">
                <FontAwesomeIcon icon={faTint} className="mr-1 sm:text-xs lg:text-2xl" />
                <span className='sm:text-xs md:text-lg lg:text-2xl ml-2'>
                  {forecastData[index] ? `${forecastData[index].pop * 100}%` : '--'}
                </span>
              </td>
              <td className="py-2">
                {forecastData[index] ? (
                  forecastData[index].weather.map((weather, iconIndex) => {
                    const icon = weather.main === 'Thunderstorm' ? faBolt : faCloudShowersHeavy;
                    return <FontAwesomeIcon key={iconIndex} icon={icon} className="mr-2 sm:text-xs md:text-lg lg:text-2xl" />;
                  })
                ) : (
                  '--'
                )}
              </td>
              <td className="py-2 text-right md:text-lg sm:text-xs">
                {forecastData[index] ? `${Math.round(forecastData[index].temp.max)}°` : '--'}
              </td>
              <td className="py-2 text-right md:text-lg sm:text-xs">
                {forecastData[index] ? `${Math.round(forecastData[index].temp.min)}°` : '--'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foreview;