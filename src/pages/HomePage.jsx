import React from "react";
import WeatherHeader from "../components/WeatherHeader";
import ForecastMini from "../components/ForecastMini";
import Notification from "../components/Notification";
import Foreview from "../components/Foreview";
import Widget from "../components/Widget";
import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => {
	return (
	<div className="bg-gradient-to-b from-teal-400 to-blue-600 dark:bg-gradient-to-b dark:from-indigo-900 dark:to-indigo-700 dark:text-lime-50 min-h-screen">
		<ThemeToggle />
		<WeatherHeader />
		<ForecastMini />
		<Notification />
		<Foreview />
		<Widget />
    </div>
	);
};

export default HomePage;