import { useState } from "react";
import "../CSS/magazines.css";
import { useEffect } from "react";
import Magazinescui from "./magazinescui";
import MagazinesFav from "./magazinesfav";
import Magazinesrec from "./magazinesrec";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../../public/image/Capture.PNG";
import logo1 from "../../public/image/Capture1.PNG";
import logo2 from "../../public/image/Capture2.PNG";
import logo3 from "../../public/image/Capture3.PNG";
import { Link, NavLink } from "react-router-dom";
import { render } from "react-dom";

class Magazinesinfos extends Component {
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
    if (this.state.Recherche === "cuisine") {
      ReactDOM.render(<Magazinescui />, document.getElementById("root"));
    }
  };

  handleClickFav = () => {
    ReactDOM.render(<MagazinesFav />, document.getElementById("body"));
  };

  handleClickRec = () => {
    ReactDOM.render(<Magazinesrec />, document.getElementById("body"));
  };

  render() {
    return (
      <div className="tete">
        <form className="recherche" onSubmit={this.handleSubmit}>
          <input
            className="recherche"
            type="text"
            placeholder="Rechercher"
            name="Recherche"
            onChange={this.onChange}
          />
          <Link to="/magazinesinfo">
            <button className="btnmar" onClick={this.affichage}>
              Recherche
            </button>
          </Link>
          <div className="recherche1">
            <Link to="/magazinesfav">
              <button className="btnmaf">Favoris</button>
            </Link>
            <Link to="/magazinesrec">
              <button className="btnmaz">Récent</button>
            </Link>
          </div>
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
            <img src={logo} alt="logo" />
            <a
              className="oui"
              href="https://internetofthingsagenda.techtarget.com/definition/Internet-of-Things-IoT"
            >
              What is internet of things (IoT)?
            </a>
            <p className="non"> Ecrire un résumé du sujet</p>
          </div>
          <div className="informatique">
            <img src={logo1} alt="logo" />
            <a
              className="oui"
              href="https://www.ibm.com/cloud/learn/what-is-artificial-intelligence"
            >
              Artificial Intelligence(AI)
            </a>
            <p className="non"> Ecrire un résumé du sujet</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Magazinesinfos;
