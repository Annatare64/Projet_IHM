import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Lexique from "./Lexique";
import "../CSS/Outils.css";
import { Link, NavLink } from "react-router-dom";

class Vetement extends React.Component {
  state = {
    divcontainer1: false,
    id: 0,
    donnees: "",
    TabInput: []
  };

  TabQu = {
    qu: [
      { id: 1, partie1: " s'habiller ", partie2: "to dress" },
      { id: 2, partie1: " porter un vêtement ", partie2: "to wear" },
      { id: 3, partie1: " se déshabiller ", partie2: "to undress" },
      { id: 4, partie1: " enlever ", partie2: " to take off" },
      { id: 5, partie1: " élégant ", partie2: "elegant,smart" },
      {
        id: 6,
        partie1: " les sous-vêtements ",
        partie2: "underclothing,underwear"
      },
      { id: 7, partie1: "un caleçon ", partie2: "pants,shorts(pl)" },
      { id: 8, partie1: "un slip ", partie2: " trunks,briefs" },
      { id: 9, partie1: " une chemise ", partie2: " a shirt" }
    ]
  };

  getData = (event) => {
    /*TabInput[val.target.name]=val.target.value
    console.log("value dans le tableau : " + TabInput[val.target.name])*/
    this.setState({
      [event.target.name]: event.target.value
    });

    console.log("get data : " + this.state.donnees);

    /*console.log(event.target.name)
		console.log(event.target.value)*/
    /*console.log("state : " + this.state.donnees)*/
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.donnees);
    this.setState({
      TabInput: [...this.state.TabInput, { donnees: this.state.donnees }],
      donnees: ""
    });
  };

  renderDonnees = () => {
    return this.state.TabInput.map((item) => {
      return <h5>{item.donnees}</h5>;
    });
  };

  render() {
    var HandleChange1 = (e) => {
      this.setState({ divcontainer1: !this.state.divcontainer1 });
    };
    const x = this.state.divcontainer1;

    const title = "Simple Present - présent simple";

    const TabVet = this.TabQu.qu.map(function (voc) {
      return (
        <tr>
          <td>{voc.partie1}</td>
          <td>{voc.partie2}</td>
        </tr>
      );
    });

    return (
      <div className="tete1">
        <div className="container1">
          <form className="formulaire" onSubmit={this.onSubmit}>
            <h4>
              <u>{title}</u>
            </h4>
            <br />
            <table>{TabVet}</table>
            <br />
            <br />
            <h5>
              <Link to="/Lexique">Retour aux lexiques</Link>
            </h5>
          </form>
          {this.renderDonnees()}
        </div>
      </div>
    );
  }
}

export default Vetement;
