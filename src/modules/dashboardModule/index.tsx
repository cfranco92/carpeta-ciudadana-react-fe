import React from "react";
import { DashboardLayout } from "../../components/layouts";
import logo from "./../../logo.svg";

const DashboardModule = () => {
  return (
    <DashboardLayout page="dashboard-page">
      <header className="App-header">
        Dashboard page
        <img src={logo} className="App-logo" alt="logo" />
        <p>Carpeta Ciudadana</p>
        <ul>
          <li>Cristian Franco Bedoya</li>
          <li>Juan Pablo García Urrea</li>
        </ul>
        <p>Universidad EAFIT</p>
      </header>
    </DashboardLayout>
  );
};

export default DashboardModule;
