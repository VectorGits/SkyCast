import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faTint, faWind, faThermometerThreeQuarters, faTachometerAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const Widget = () => {
  const widgets = [
    { icon: faSun, label: "UV Index", value: "Low" },
    { icon: faTint, label: "Humidity", value: "92%" },
    { icon: faWind, label: "Wind", value: "6 mph" },
    { icon: faThermometerThreeQuarters, label: "Dew Point", value: "76°" },
    { icon: faTachometerAlt, label: "Pressure", value: "29.95 in" },
    { icon: faEye, label: "Visibility", value: "6 mi" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:m-4 sm:m-2">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className="items-center bg-white p-4 shadow-md bg-white/30 backdrop-blur-md border border-white/20 rounded-lg"
        >
          <div className='flex items-center mb-1 '>
          	<FontAwesomeIcon icon={widget.icon} className="sm:text-xs md:text-base lg:text-xl mr-2" />
            <div className="sm:text-xs md:text-base lg:text-xl font-semibold text-gray-600">{widget.label}</div>
          </div>
            <div className="sm:text-base md:text-xl lg:text-3xl font-bold">{widget.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Widget;
