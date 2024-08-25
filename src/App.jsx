import React from 'react';
import WeatherHeader from './components/WeatherHeader'; // Adjust the path as necessary
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <WeatherHeader />
      <Forecast />
      {/* Other components can go here */}
    </div>
  );
}

export default App;