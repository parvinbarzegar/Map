import React from 'react';


import './App.css';
import Map from "./view/Map"

import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar logoUrl="/" />
        <Map/>
    </div>
  );
}

export default App;
