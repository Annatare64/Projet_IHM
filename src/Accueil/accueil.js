import { useState } from "react";
import { useEffect } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "../CSS/accueil.css";
import Magazines from "../Magazines/magazines";
import { Link, NavLink } from "react-router-dom";

class Accueil extends Component {
  render() {
    return (
      <div className="tete1">
        <div>
          <p> Explication de la partis Magazines</p>
          <p> Explication de la partis Atelier</p>
          <p> Explication de la partis Outils</p>
        </div>
        <div className="Divaccueil">
          <Link to="/Magazines">
            <button className="btnacc">Magazines</button>
          </Link>
          <Link to="/ExoGramm">
            <button className="btnacc">Atelier</button>
          </Link>
          <Link to="/Lexique">
            <button className="btnacc">Outils</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Accueil;
