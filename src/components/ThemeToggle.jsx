// ThemeToggle.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check local storage for theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('dark', savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDark);
            document.body.classList.toggle('dark', prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');

        // Save preference in local storage
        if (!isDarkMode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
                <span
                    className={`absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center ${
                        isDarkMode ? 'translate-x-5' : ''
                    }`}
                >
                    <FontAwesomeIcon
                     icon={isDarkMode ? faSun : faMoon}
                     className={isDarkMode ? 'text-teal-400' : 'text-indigo-700'}
                    />
                </span>
            </div>
        </label>
    );
};

export default ThemeToggle;
