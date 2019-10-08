import React, { Fragment } from 'react';
import './Result.css';

const Result = ({ weather }) => {
  const { date, city, temp, pressure, wind, icon, error } = weather;
  let content = null;

  if (!error && city) {
    content = (
      <div className="result">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="result__image" alt=""/>
        <h1 className="result__title">{city}</h1>
        <p className="result__date">{date}</p>
        <p className="result__temp">{temp.toFixed(1)}&#176;C</p>
        <p><span className="fas fa-tachometer-alt result__icon"></span> {pressure} hPa</p>
        <p><span className="fas fa-wind result__icon"></span> {wind} m/s</p>
      </div>
    );
  }

  return (
    <Fragment>
      {error ? <p className="error">{city} doesn't exists!</p> : content}
    </Fragment>
  );
}

export default Result;
