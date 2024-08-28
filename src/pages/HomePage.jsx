import React from "react";
import WeatherHeader from "../components/WeatherHeader";
import ForecastMini from "../components/ForecastMini";
import Notification from "../components/Notification";
import Foreview from "../components/Foreview";
import Widget from "../components/Widget";

const HomePage = () => {
	return (
	<div>
		<WeatherHeader />
		<ForecastMini />
		<Notification />
		<Foreview />
		<Widget />
    </div>
	);
};

export default HomePage;