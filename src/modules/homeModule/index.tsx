import React from "react";
import { DashboardLayout } from "../../components/layouts";
import logo from "./../../logo.svg";

const HomeModule = () => {
  return (
    <>
      <DashboardLayout page="home-page">
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
      </DashboardLayout>
    </>
  );
};

export default HomeModule;
