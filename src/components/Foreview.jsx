import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCloudShowersHeavy, faBolt } from '@fortawesome/free-solid-svg-icons';

const Foreview = () => {
  const forecasts = [
    { day: "Yesterday", precipitation: "", tempHigh: "85°", tempLow: "78°", icons: [] },
    { day: "Today", precipitation: "45%", tempHigh: "85°", tempLow: "77°", icons: [faCloudShowersHeavy] },
    { day: "Monday", precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faBolt] },
    { day: "Tuesday", precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faBolt, faCloudShowersHeavy] },
    { day: "Wednesday", precipitation: "45%", tempHigh: "83°", tempLow: "76°", icons: [faBolt, faCloudShowersHeavy] },
    { day: "Thursday", precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faBolt, faCloudShowersHeavy] },
    { day: "Friday", precipitation: "45%", tempHigh: "84°", tempLow: "76°", icons: [faCloudShowersHeavy] },
    { day: "Saturday", precipitation: "45%", tempHigh: "85°", tempLow: "77°", icons: [faCloudShowersHeavy] },
  ];

  return (
    <div className="p-4 m-4 bg-white border rounded-lg shadow-md">
      <table className="w-full">
        <tbody>
          {forecasts.map((forecast, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py- sm:text-xs md:text-lg lg:text-2xl">{forecast.day}</td>
              <td className="py-2">
                <FontAwesomeIcon icon={faTint} className="mr-1 sm:text-xs lg:text-2xl" />
                <span className='sm:text-xs md:text-lg lg:text-2xl ml-2'>{forecast.precipitation}</span>
              </td>
              <td className="py-2">
                {forecast.icons.map((icon, iconIndex) => (
                  <FontAwesomeIcon key={iconIndex} icon={icon} className="mr-2 sm:text-xs md:text-lg lg:text-2xl" />
                ))}
              </td>
              <td className="py-2 text-right md:text-lg sm:text-xs                                                                                                                                                                         ">{forecast.tempHigh}</td>
              <td className="py-2 text-right md:text-lg sm:text-xs                                                                                                                                                                         ">{forecast.tempLow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foreview;
