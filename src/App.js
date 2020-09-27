import React from 'react';
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <React.Fragment>
      <h1>Weather Finder App</h1>
      <h2>Find out temperature, conditions and more...</h2>
      <Weather />
    </React.Fragment>
  );
}

export default App;
