import React, { Component } from 'react';
import debounce from 'debounce';
import Form from './Form';
import Result from './Result';
import { CONFIG } from '../config/config';
import './App.css';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    temp: '',
    pressure: '',
    wind: '',
    icon: '',
    error: false,
  };

  handeInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });

    this.handleFetch();
  }

  handleFetch = debounce(() => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&APPID=${CONFIG.API_KEY}`;

    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error('Fetch problem');
      })
      .then((res) => res.json())
      .then((data) => {
        const time = new Date().toLocaleDateString();

        this.setState((prevState) => ({
          date: time,
          city: prevState.value,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          icon: data.weather[0].icon,
          error: false,
        }));
      })
      .catch((err) => {
        this.setState((prevState) => ({
          error: true,
          city: prevState.value,
        }));
      });
  }, 1000);

  render() {
    return (
      <div className="container">
        <Form
          onChange={this.handeInputChange}
          value={this.state.value}
        />
        <Result weather={this.state} />
      </div>
    )
  }
}

export default App;
