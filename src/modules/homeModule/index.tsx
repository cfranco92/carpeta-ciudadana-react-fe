import React from "react";
import BaseLayout from "../../components/layouts/base-layout";
import logo from "./../../logo.svg";

const HomeModule = () => {
  return (
    <BaseLayout page="home-page">
      <header className="App-header">
        Home page
        <img src={logo} className="App-logo" alt="logo" />
        <p>Carpeta Ciudadana</p>
        <ul>
          <li>Cristian Franco Bedoya</li>
          <li>Juan Pablo García Urrea</li>
        </ul>
        <p>Universidad EAFIT</p>
      </header>
    </BaseLayout>
  );
};

export default HomeModule;
