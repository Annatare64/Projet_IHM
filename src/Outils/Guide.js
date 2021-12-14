import React from "react";
import ReactDOM from "react-dom";
import Présent from "./present";
import "../CSS/Outils.css";
import { Link, NavLink } from "react-router-dom";

class Guide extends React.Component {
  state = {
    divcontainer1: true,
    divcontainer2: true,
    divcontainer3: true
  };

  TabGui = {
    leçon: [
      {
        id: 1,
        temps: "Présent",
        type: "Le présent simple (present simple)"
      },
      {
        id: 2,
        temps: "Présent",
        type: "Le présent continu (present continuous)"
      },
      {
        id: 3,
        temps: "Passé",
        type: "Le passé simple ou prétérit (past simple ou preterit)"
      },
      {
        id: 4,
        temps: "Passé",
        type: "Le passé continu (past continuous)"
      },
      {
        id: 5,
        temps: "Passé",
        type: "Le passé composé (present perfect)"
      },
      {
        id: 6,
        temps: "Passé",
        type: "Le passé composé continu (present perfect continuous)"
      },
      {
        id: 7,
        temps: "Passé",
        type: "Le plus-que-parfait (past perfect)"
      },
      {
        id: 8,
        temps: "Futur",
        type: "Le futur simple (future simple)"
      },
      {
        id: 9,
        temps: "Futur",
        type: "Le futur continu (future continuous)"
      },
      {
        id: 10,
        temps: "Futur",
        type: "Le futur antérieur (future perfect)"
      },
      {
        id: 3,
        temps: "Modéré",
        type: "Exercice"
      }
    ]
  };
  onSubmit = (event) => {
    event.preventDefault();
  };

  displayLeçon() {
    const present = document.getElementById("body");
    ReactDOM.render(<Présent />, present);
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
    const x = this.state.divcontainer1;
    const y = this.state.divcontainer2;
    const z = this.state.divcontainer3;

    const title = "Leçon de Conjugaison :";
    const elementsFacile = this.TabGui.leçon.map(
      function (gui) {
        if (gui.temps == "Présent") {
          return (
            <li>
              <Link to="/present">
                &ensp;{gui.type}: {gui.nom}
              </Link>
            </li>
          );
        }
      }.bind(this)
    );
    const elementsModéré = this.TabGui.leçon.map(
      function (gui) {
        if (gui.temps == "Passé") {
          return (
            <li>
              <a href="#" onClick={() => this.displayguiVocab(gui.id)}>
                &ensp;{gui.type}: {gui.nom}
              </a>
            </li>
          );
        }
      }.bind(this)
    );
    const elementsDifficile = this.TabGui.leçon.map(
      function (gui) {
        if (gui.temps == "Futur") {
          return (
            <li>
              <a href="#" onClick={() => this.displayguiVocab(gui.id)}>
                &ensp;{gui.type}: {gui.nom}
              </a>
            </li>
          );
        }
      }.bind(this)
    );

    return (
      <form onSubmit={this.onSubmit}>
        <h4>
          <u>{title}</u>
        </h4>
        <h5>
          <button onClick={HandleChange1}>Présent</button>
          {x && <h5>{elementsFacile}</h5>}
        </h5>
        <h5>
          <button onClick={HandleChange2}>Passé</button>
          {y && (
            <h5>
              <a href="#" onClick={this.displaygui1Vocab}>
                {elementsModéré}
              </a>
            </h5>
          )}
        </h5>
        <h5>
          <button onClick={HandleChange3}>Futur</button>
          {z && (
            <h5>
              <a href="#" onClick={this.displaygui1Vocab}>
                {elementsDifficile}
              </a>
            </h5>
          )}
        </h5>
      </form>
    );
  }
}

export default Guide;
