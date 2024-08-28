// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForecastPage from './pages/ForecastPage';

function App() {
  return (
    <Router>
      <div className="App max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/forecast" element={<ForecastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;