import "./App.css";

import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Carpeta Ciudadana</p>
        <ul>
          <li>Cristian Franco Bedoya</li>
          <li>Juan Pablo García Urrea</li>
        </ul>
        <p>Universidad EAFIT</p>
      </header>
    </div>
  );
}

export default App;
