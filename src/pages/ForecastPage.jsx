import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ForecastMaxi from "../components/ForecastMaxi";

const ForecastPage = () => {
    return (
        <div>
            <div className="flex items-center mb-2 p-4">
                <Link to="/home" className="flex items-center justify-center text-center font-bold px-2 py-1 mr-2 border underline rounded-lg sm:text-base md:text-xl lg:text-2xl">
				<lord-icon
					src="https://cdn.lordicon.com/whtfgdfm.json"
					trigger="loop"
					delay="2000"
					className="sm:text-base md:text-xl lg:text-2xl"
					style={{ transform: 'scaleX(-1)' }}>
				</lord-icon>
                </Link>
                <Link to="/forecast" className="text-center text-gray-800 font-bold p-2 border rounded-lg underline sm:text-base md:text-xl lg:text-2xl">
                    Tomorrow
                </Link>
            </div>


            <ForecastMaxi />
        </div>
    );
};

export default ForecastPage;