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
import logo4 from "../../public/image/largepreview (1).png";
import logo5 from "../../public/image/largepreview.png";
import { Link, NavLink } from "react-router-dom";
import { render } from "react-dom";

class Magazinesinfos extends Component {
  state = {
    Recherche: "",
    value: "",
    Compteur: 0,
    Cuisine: "/magazinescui",
    Compteur1: 0,
    Compteur2: 0,
    Compteur3: 0,
    Compteur4: 5,
    Compteur5: 0,
    Compteur6: 0,
    Compteur7: 0,
    Compteur8: 0,
    Compteur9: 0,
    Informatique: "/magazinesinfo"
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.Recherche);
    if (this.state.Recherche === "informatique") {
      this.setState({
        Informatique: "/magazinesinfo"
      });
    }
    if (this.state.Recherche === "cuisine") {
      Informatique: "/magazinescui";
    }
  };

  handleClickFav = () => {
    ReactDOM.render(<MagazinesFav />, document.getElementById("body"));
  };

  handleClickRec = () => {
    ReactDOM.render(<Magazinesrec />, document.getElementById("body"));
  };

  Handlecompt = (e) => {
    this.setState({
      Compteur: this.state.Compteur + 1
    });
  };

  Handlecompt1 = (e) => {
    this.setState({
      Compteur1: this.state.Compteur1 + 1
    });
  };
  Handlecompt2 = (e) => {
    this.setState({
      Compteur2: this.state.Compteur2 + 1
    });
  };
  Handlecompt3 = (e) => {
    this.setState({
      Compteur3: this.state.Compteur3 + 1
    });
  };
  Handlecompt4 = (e) => {
    this.setState({
      Compteur4: this.state.Compteur4 + 1
    });
  };
  Handlecompt5 = (e) => {
    this.setState({
      Compteur5: this.state.Compteur5 + 1
    });
  };
  Handlecompt6 = (e) => {
    this.setState({
      Compteur6: this.state.Compteur6 + 1
    });
  };
  Handlecompt7 = (e) => {
    this.setState({
      Compteur7: this.state.Compteur7 + 1
    });
  };
  Handlecompt8 = (e) => {
    this.setState({
      Compteur8: this.state.Compteur8 + 1
    });
  };
  Handlecompt9 = (e) => {
    this.setState({
      Compteur9: this.state.Compteur9 + 1
    });
  };

  render() {
    var value = "";
    if (this.state.Recherche === "informatique") {
      value = this.state.Informatique;
    }
    if (this.state.Recherche === "cuisine") {
      value = this.state.Cuisine;
    }
    return (
      <div className="tete">
        <form className="recherche" onSubmit={this.handleSubmit}>
          <input
            className="inputr"
            type="text"
            placeholder="Rechercher"
            name="Recherche"
            onChange={this.onChange}
          />
          <Link to={value}>
            <button className="btnmar" onClick={this.affichage}>
              Recherche
            </button>
          </Link>
          <div className="recherche1">
            <Link to="/magazinesfav">
              <button className="btnmaf">Favoris</button>
            </Link>
            <Link to="/magazinesrec">
              <button className="btnmaz">R??cent</button>
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
            <p className="non"> Ecrire un r??sum?? du sujet</p>
            <button className="btnC" onClick={this.Handlecompt}>
              ????
            </button>
            <span>{this.state.Compteur}</span>{" "}
          </div>
          <div className="informatique">
            <img src={logo1} alt="logo" />
            <a
              className="oui"
              href="https://www.ibm.com/cloud/learn/what-is-artificial-intelligence"
            >
              Artificial Intelligence(AI)
            </a>
            <p className="non"> Ecrire un r??sum?? du sujet</p>
            <button className="btnC" onClick={this.Handlecompt1}>
              ????
            </button>
            <span>{this.state.Compteur1}</span>{" "}
          </div>
          <div className="informatique">
            <img src={logo4} alt="logo" />
            <a className="oui" href={logo4}>
              The Emergence of Internet of Thing
            </a>
            <p className="non"> Ecrire un r??sum?? du sujet</p>
            <button className="btnC" onClick={this.Handlecompt4}>
              ????
            </button>
            <span>{this.state.Compteur4}</span>{" "}
          </div>
          <div className="informatique">
            <img src={logo5} alt="logo" />
            <a className="oui" href={logo5}>
              The Future of Intrnet of Things
            </a>
            <p className="non"> Ecrire un r??sum?? du sujet</p>
            <button className="btnC" onClick={this.Handlecompt5}>
              ????
            </button>
            <span>{this.state.Compteur5}</span>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default Magazinesinfos;
