import { useState } from "react";
import "../CSS/magazines.css";
import { useEffect } from "react";
import Magazinesinfo from "./magazinesinfo";
import MagazinesFav from "./magazinesfav";
import Magazinesrec from "./magazinesrec";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../public/image/Capture.PNG";
import logo1 from "../../public/image/Capture1.PNG";
import logo2 from "../../public/image/Capture2.PNG";
import logo3 from "../../public/image/Capture3.PNG";
import { render } from "react-dom";

class Magazinescui extends Component {
  state = {
    Recherche: "",
    value: ""
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  affichage = (event) => {
    console.log(this.state.Recherche);
    if (this.state.Recherche === "informatique") {
      ReactDOM.render(<Magazinesinfo />, document.getElementById("root"));
    }
  };
  render() {
    return (
      <div className="En-tete1">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Rechercher"
            name="Recherche"
            onChange={this.onChange}
          />
          <button onClick={this.affichage}>Recherche</button>
          <button onClick={this.handleCLickFav}>Favoris</button>
          <button onClick={this.handleClickRec}>Récent</button>
        </form>
        {/*{datas
      .filter((val) => {
        return val.title.includes(searchTerm);
      })
      .map((val) => {
        return (
          <div className="search_result" key={val.id}>
            {val.title}
          </div>
        );
      })}*/}
        <div className="container">
          <div className="informatique">
            <img src={logo2} alt="logo" />
            <a
              className="oui"
              href="https://www.jamieoliver.com/recipes/potato-recipes/basic-latkes/"
            >
              Basic latkes
            </a>
            <p className="non"> Ecrire un résumé du sujet</p>
          </div>
          <div className="informatique">
            <img src={logo3} alt="logo" />
            <a
              className="oui"
              href="https://www.jamieoliver.com/recipes/eggs-recipes/spanish-tortilla/"
            >
              Spanish tortilla
            </a>
            <p className="non"> Ecrire un résumé du sujet</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Magazinescui;
