import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ForecastMaxi from "../components/ForecastMaxi";
import Nav from "../components/Nav";

const ForecastPage = () => {
    return (
        <div className="bg-gradient-to-b from-teal-400 to-blue-600 dark:bg-gradient-to-b dark:from-indigo-900 dark:to-indigo-700 dark:text-lime-50 py-2">
            <Nav />
            <div className="flex items-center mb-2 p-4">
                <Link to="/home" className="flex items-center justify-center text-center font-bold px-2 py-1 mr-2 underline rounded-lg sm:text-base md:text-xl lg:text-2xl bg-white/30 border border-white/20 p-1">
				<lord-icon
					src="https://cdn.lordicon.com/whtfgdfm.json"
					trigger="loop"
					delay="2000"
					className="sm:text-base md:text-xl lg:text-2xl"
					style={{ transform: 'scaleX(-1)' }}>
				</lord-icon>
                </Link>
                <Link to="/forecast" className="text-center text-gray-800 dark:text-gray-300 font-bold p-2 border rounded-lg underline sm:text-base md:text-xl lg:text-2xl">
                    Tomorrow
                </Link>
            </div>

            <ForecastMaxi />
        </div>
    );
};

export default ForecastPage;