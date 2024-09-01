import React from 'react';

function WeatherBlock({ city, temperature, icon, styleClass }) {
  return (
    <li className={styleClass}>
      {city}
      <div>
        <span>{temperature}</span>
        <i className={`wi ${icon}`}></i>
      </div>
    </li>
  );
}

export default WeatherBlock;
