import React from 'react';
import './App.css';
import Header from './components/Header';
import WeatherBlock from './components/WeatherBlock';
import Footer from './components/Footer';

function App() {
  const weatherData = [
    { city: 'Lisbon', temperature: '21°C', icon: 'wi-day-sunny', styleClass: 'lisbon' },
    { city: 'Paris', temperature: '11°C', icon: 'wi-night-sleet', styleClass: 'paris' },
    { city: 'Belgrade', temperature: '15°C', icon: 'wi-day-cloudy', styleClass: 'belgrade' },
    { city: 'Venice', temperature: '21°C', icon: 'wi-day-cloudy-high', styleClass: 'venice' },
    { city: 'Tel-Aviv', temperature: '32°C', icon: 'wi-hot', styleClass: 'tel-aviv' },
    { city: 'Cairo', temperature: '21°C', icon: 'wi-day-sunny', styleClass: 'cairo' },
    { city: 'New-York', temperature: '17°C', icon: 'wi-day-sleet-storm', styleClass: 'new-york' },
    { city: 'New-Delhi', temperature: '17°C', icon: 'wi-rain-wind', styleClass: 'new-delhi' },
    { city: 'San-Francisco', temperature: '15°C', icon: 'wi-day-sunny-overcast', styleClass: 'san-francisco' },
    { city: 'Tokyo', temperature: '8°C', icon: 'wi-night-clear', styleClass: 'tokyo' },
    { city: 'Sydney', temperature: '25°C', icon: 'wi-night-cloudy', styleClass: 'sydney' },
  ];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ul className="blocks">
          {weatherData.map((data, index) => (
            <WeatherBlock key={index} {...data} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
