// src/hooks/useWeatherIcon.js
import { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudShowersHeavy, faBolt, faSnowflake, faSmog, faCloudMoon } from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  '01d': faSun,
  '01n': faCloudMoon,
  '02d': faCloud,
  '02n': faCloud,
  '03d': faCloud,
  '03n': faCloud,
  '04d': faCloud,
  '04n': faCloud,
  '09d': faCloudShowersHeavy,
  '09n': faCloudShowersHeavy,
  '10d': faCloudShowersHeavy,
  '10n': faCloudShowersHeavy,
  '11d': faBolt,
  '11n': faBolt,
  '13d': faSnowflake,
  '13n': faSnowflake,
  '50d': faSmog,
  '50n': faSmog,
};

const useWeatherIcon = (iconCode) => {
  const icon = useMemo(() => iconMapping[iconCode] || faCloud, [iconCode]);
  return <FontAwesomeIcon icon={icon} />;
};

export default useWeatherIcon;