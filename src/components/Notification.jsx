import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://skycast-backend-live.onrender.com/this-weather');
        const data = await response.json();
        setWeatherData(data.weather.current);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);


  const notifications = [
    { message: "Grab an Umbrella! Rain ending around 9:00 PM" },
    { message: "Prepare for thunderstorms later in the evening." },
    { message: "Clear skies expected tomorrow morning." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % notifications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + notifications.length) % notifications.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div className="p-2 sm:py-2 lg:py-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg md:m-4 sm:m-2">
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faUmbrella} className="text-xl mr-2" />
              <div className="sm:text-xs md:text-md lg:text-lg font-semibold">{notification.message}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {notifications.map((_, index) => (
          <button
            key={index}
            className={`sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;