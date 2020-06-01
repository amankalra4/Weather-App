import React from 'react';
import './weather.css';
import Weather from './Weather'

function App() {
  return (
    <React.Fragment>
      <h1>Weather Finder</h1>
      <h2>Find out temperature, conditions and more...</h2>
      <Weather />
    </React.Fragment>
  );
}

export default App;
