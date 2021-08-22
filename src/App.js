import React, { useState } from 'react';

import './App.css';
import TemperatureInputInCelsius from './components/TemperatureInputInCelsius';
import TemperatureInputInFahrenheit from './components/TemperatureInputInFahrenheit';
import BoilingResult from './components/BoilingResult';
import { toCelsius,  toFarenheit} from './converter';

function App() {
  const [temperatureInCelsius, setTemperatureInCelsius] = useState('100');
  const [temperatureInFarenheit, setTemperatureInFarenheit] = useState('200');

  function handleTemperatureInCelsius(event) {
      const temperature = event.target.value;
      if(isNaN(temperature)){
        return;
      }
      setTemperatureInCelsius(temperature);
      setTemperatureInFarenheit(toFarenheit(temperature));
  }

  function handleTemperatureInFarenheit(event) {
      const temperature = event.target.value;
      if(isNaN(temperature)) {
        return;
      }
      setTemperatureInFarenheit(temperature);
      setTemperatureInCelsius(toCelsius(temperature));
  }

  return (
    <div className="app">
      <h1>Boiling Meter</h1>
      <TemperatureInputInCelsius temperatureInCelsius={temperatureInCelsius} handleTemperatureInCelsius={handleTemperatureInCelsius} />
      <TemperatureInputInFahrenheit temperatureInFarenheit={temperatureInFarenheit}  handleTemperatureInFarenheit={handleTemperatureInFarenheit} />
      <BoilingResult temperatureInCelsius={temperatureInCelsius}/>
    </div>
  );
}

export default App;