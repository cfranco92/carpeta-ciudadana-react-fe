import React from "react";
import BaseLayout from "../../components/layouts/base-layout";
import { Link } from "react-router-dom";
import logo from "./../../logo.svg";
import useStyles from "./styles";

const HomeModule = () => {
  const classes = useStyles();
  return (
    <BaseLayout page="home-page">
      <header className={classes.root}>
        <Link to={"/dashboard"}>CARPETA CIUDADANA</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Desarrollado por:</p>
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
