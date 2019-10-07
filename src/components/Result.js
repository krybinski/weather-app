import React, { Fragment } from 'react';

const Result = ({ weather }) => {
  const { date, city, sunrise, sunset, temp, pressure, wind, error } = weather;
  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div>
        <h3>{`Results for ${city}`}</h3>
        <p>{`Date: ${date}`}</p>
        <p>{`Current temp: ${temp}`}&#176;C</p>
        <p>{`Sunrise at: ${sunriseTime}`}</p>
        <p>{`Sunset at: ${sunsetTime}`}</p>
        <p>{`Pressure: ${pressure}`} hPa</p>
        <p>{`Wind speed: ${wind}`} m/s</p>
      </div>
    );
  }

  return (
    <Fragment>
      {error ? `${city} doesn't exists!` : content}
    </Fragment>
  );
}

export default Result;
