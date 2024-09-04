import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg mx-4 sm:mx-2">
      <div className='bg-white/30 border border-white/20 rounded-full flex items-center p-1'>
      <lord-icon
            src="https://cdn.lordicon.com/jnikqyih.json"
            trigger="loop"
            delay="2000"
            className="sm:text-base md:text-xl lg:text-2xl dark:text-lime-50">
          </lord-icon>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Nav;
