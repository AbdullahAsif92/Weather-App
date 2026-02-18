import './App.css';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from './components/Navigation';
import CityWeather from './components/CityWeather';
import AllCities from './components/AllCities';

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const [city, setCity] = useState("Lahore");
  const [weatherApiData, setWeatherApiData] = useState([]);

  const [savedCities, setSavedCities] = useState(() => {
    const stored = localStorage.getItem("savedCities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedCities", JSON.stringify(savedCities));
  }, [savedCities]);

  const addCity = (cityName, weatherData) => {
    setSavedCities(prev => {
      const exists = prev.find(item => item.city === cityName);
      if (exists) return prev;

      return [...prev, { city: cityName, data: weatherData }];
    });
  };

  const removeCity = (cityName) => {
    setSavedCities(prev =>
      prev.filter(item => item.city !== cityName)
    );
  };

  return (
    <Router>
      <div className='min-h-screen overflow-y-auto pb-24 md:pb-0 md:max-w-screen-2xl md:mx-auto'>
        <Search setCity={setCity} />

        <div className='md:flex'>
          <Navigation />

          <Routes>
            <Route
              path='/'
              element={
                <CityWeather
                  apiKey={apiKey}
                  city={city}
                  addCity={addCity}
                  setWeatherApiData={setWeatherApiData}
                />
              }
            />
            <Route
              path='/allcities'
              element={
                <AllCities
                  savedCities={savedCities}
                  removeCity={removeCity}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
