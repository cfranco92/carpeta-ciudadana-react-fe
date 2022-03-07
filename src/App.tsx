import React from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomeContainer from "./containers/homeContainer";
import LoginContainer from "./containers/loginContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default App;
