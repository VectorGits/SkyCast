import React from 'react';
import WeatherHeader from './components/WeatherHeader'; // Adjust the path as necessary
import Forecast from './components/Forecast';
import Notification from './components/Notification';
import Foreview from './components/Foreview';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <WeatherHeader />
      <Forecast />
      <Notification />
      <Foreview />
      {/* Other components can go here */}
    </div>
  );
}

export default App;