import React from 'react';
import './App.css';
import ParkingSpot from './components/ParkingSpot/ParkingSpot';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ParkingSpot/>
    </div>
  );
}

export default App;
