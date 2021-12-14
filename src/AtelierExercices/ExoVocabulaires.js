import React from "react";
import ReactDOM from "react-dom";
import "../CSS/Styles_Atelier.css";
import { Link, NavLink } from "react-router-dom";

import Exo1 from "./exercices/VocabExo.js";

class ExoVocab extends React.Component {
  state = {
    divcontainer1: true,
    divcontainer2: false,
    divcontainer3: false
  };
  compteur = 0;

  TabEx = {
    exercices: [
      {
        id: 1,
        difficulté: "Facile",
        type: "Exercice",
        nom: "Les chiffres et les nombres"
      },
      {
        id: 2,
        difficulté: "Facile",
        type: "Exercice",
        nom: "Les jours de la semaine et les mois"
      },
      { id: 3, difficulté: "Facile", type: "Exercice", nom: "L'heure" },
      {
        id: 4,
        difficulté: "Modéré",
        type: "Exercice",
        nom: "La mer, l’océan, la plage"
      },
      {
        id: 5,
        difficulté: "Modéré",
        type: "Exercice",
        nom: "Les fruits et légumes"
      },
      {
        id: 6,
        difficulté: "Modéré",
        type: "Exercice",
        nom: "Nourriture et boissons"
      },
      { id: 7, difficulté: "Difficile", type: "Exercice", nom: "Les animaux" },
      { id: 8, difficulté: "Difficile", type: "Exercice", nom: "La maison" },
      { id: 9, difficulté: "Difficile", type: "Exercice", nom: "La famille" }
    ]
  };
  onSubmit = (event) => {
    event.preventDefault();
  };

  displayExoVocab(value) {
    const exo1 = document.getElementById("body");
    console.log(value);
    if (value === 1) {
      ReactDOM.render(<Exo1 />, exo1);
    } /*else if (value === 2) {
			ReactDOM.render(<Exo2 />, exo1)
		} else if (value === 3) {
			ReactDOM.render(<Exo2 />, exo1)
		}*/
  }

  render() {
    var HandleChange1 = (e) => {
      this.setState({ divcontainer1: !this.state.divcontainer1 });
    };
    var HandleChange2 = (e) => {
      this.setState({ divcontainer2: !this.state.divcontainer2 });
    };
    var HandleChange3 = (e) => {
      this.setState({ divcontainer3: !this.state.divcontainer3 });
    };

    var countFacile = 0,
      countModéré = 0,
      countDifficile = 0;
    const title = "Exercices de Vocabulaire :";
    const elementsFacile = this.TabEx.exercices.map(
      function (exo) {
        if (exo.difficulté == "Facile") {
          return (
            <li>
              <Link to="/ExoVocab1">
                &ensp;{exo.type}
                {exo.id} : {exo.nom}{" "}
              </Link>
            </li>
          );
        }
      }.bind(this)
    );
    const elementsModéré = this.TabEx.exercices.map(function (exo) {
      if (exo.difficulté == "Modéré") {
        var countModéré = countModéré + 1;
        return (
          <li>
            &ensp;{exo.type}
            {exo.id} : {exo.nom}{" "}
          </li>
        );
      }
    });
    const elementsDifficile = this.TabEx.exercices.map(function (exo) {
      if (exo.difficulté == "Difficile") {
        var countDifficile = countDifficile + 1;
        return (
          <li>
            &ensp;{exo.type}
            {exo.id} : {exo.nom}{" "}
          </li>
        );
      }
    });
    const x = this.state.divcontainer1;
    const y = this.state.divcontainer2;
    const z = this.state.divcontainer3;
    return (
      <form onSubmit={this.onSubmit}>
        <h4>
          <u>{title}</u>
        </h4>
        <h5>
          <button onClick={HandleChange1}>Facile</button>
          {x && <h5>{elementsFacile}</h5>}
        </h5>
        <h5>
          <button onClick={HandleChange2}>Modéré</button>
          {y && (
            <h5>
              <a href="#" onClick={this.displayExo1Vocab}>
                {elementsModéré}
              </a>
            </h5>
          )}
        </h5>
        <h5>
          <button onClick={HandleChange3}>Difficile</button>
          {z && (
            <h5>
              <a href="#" onClick={this.displayExo1Vocab}>
                {elementsDifficile}
              </a>
            </h5>
          )}
        </h5>
      </form>
    );
  }
}

export default ExoVocab;
