import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  const notifications = [
    { message: "Grab an Umbrella! Rain ending around 9:00 PM" },
    { message: "Prepare for thunderstorms later in the evening." },
    { message: "Clear skies expected tomorrow morning." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % notifications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + notifications.length) % notifications.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="p-4">
      <div className="relative flex items-center justify-center bg-white border rounded-lg p-4 shadow-md">
        <FontAwesomeIcon icon={faUmbrella} className="text-xl mr-2" />
        <div className="flex-1 text-lg font-semibold">{notifications[currentSlide].message}</div>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {notifications.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
