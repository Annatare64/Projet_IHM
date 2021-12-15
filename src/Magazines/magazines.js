import { useState } from "react";
import "../CSS/magazines.css";
import { useEffect } from "react";
import React, { Component } from "react";
import Magazinesinfo from "./magazinesinfo";
import Magazinescui from "./magazinescui";
import MagazinesFav from "./magazinesfav";
import Magazinesrec from "./magazinesrec";
import ReactDOM from "react-dom";
import logo from "../../public/image/Capture.PNG";
import logo1 from "../../public/image/Capture1.PNG";
import logo2 from "../../public/image/Capture2.PNG";
import logo3 from "../../public/image/Capture3.PNG";
import { render } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

class Magazines extends Component {
  state = {
    Recherche: "",
    Informatique: "/magazinesinfo",
    Cuisine: "/magazinescui"
  };

  displayInfoCui(value) {
    const maga = document.getElementById("body");
    if (this.state.Recherche === "informatique") {
    }
    console.log(this.state.Recherche);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  affichage = (e) => {
    let value = "/magazines";
    console.log(this.state.Recherche);
    if (this.state.Recherche === "informatique") {
      value = this.state.Informatique;
    }
    if (this.state.Recherche === "cuisine") {
      value = this.state.Cuisine;
    }
  };

  //console.log(this.state.Recherche);
  /*{ const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };}*/

  render() {
    return (
      <div className="tete">
        <form className="recherche">
          <input
            className="inputr"
            type="text"
            placeholder="Rechercher"
            name="Recherche"
            onChange={this.onChange}
            value={this.state.Recherche}
            onSubmit={this.handleSubmit}
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
            <a className="oui" href={logo}>
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
            <img src={logo} alt="logo" />
            <a
              className="oui"
              href="https://internetofthingsagenda.techtarget.com/definition/Internet-of-Things-IoT"
            >
              What is internet of things (IoT)?
            </a>
            <p className="non"> Ecrire un résumé du sujet</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Magazines;
