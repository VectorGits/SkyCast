import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCloudShowersHeavy, faBolt } from '@fortawesome/free-solid-svg-icons';

const Foreview = () => {
  const forecasts = [
    { precipitation: "45%", tempHigh: "85°", tempLow: "77°", icons: [faCloudShowersHeavy] },
    { precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faBolt] },
    { precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faBolt, faCloudShowersHeavy] },
    { precipitation: "45%", tempHigh: "83°", tempLow: "76°", icons: [faBolt, faCloudShowersHeavy] },
    { precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faBolt, faCloudShowersHeavy] },
    { precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faCloudShowersHeavy] },
  ];

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
                <span className='sm:text-xs md:text-lg lg:text-2xl ml-2'>{forecasts[index]?.precipitation}</span>
              </td>
              <td className="py-2">
                {forecasts[index]?.icons.map((icon, iconIndex) => (
                  <FontAwesomeIcon key={iconIndex} icon={icon} className="mr-2 sm:text-xs md:text-lg lg:text-2xl" />
                ))}
              </td>
              <td className="py-2 text-right md:text-lg sm:text-xs">{forecasts[index]?.tempHigh}</td>
              <td className="py-2 text-right md:text-lg sm:text-xs">{forecasts[index]?.tempLow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foreview;