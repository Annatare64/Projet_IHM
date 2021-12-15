import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

import "../../CSS/Exo.css";

class ExoConj1 extends React.Component {
  state = {
    divcontainer1: false,
    id: 0,
    donnees: "",
    TabInput: []
  };

  TabQu = {
    qu: [
      {
        id: 1,
        partie1: " Joan ",
        partie2: "football every day.",
        partie3: "",
        verb1: "(to play)",
        verb2: ""
      },
      {
        id: 2,
        partie1: " Who ",
        partie2: "on the grass?",
        partie3: "",
        verb1: "(to walk)",
        verb2: ""
      },
      {
        id: 3,
        partie1: " We always ",
        partie2: "softly while Mother",
        partie3: ".",
        verb1: " (to speak)",
        verb2: "(to sleep)"
      },
      {
        id: 4,
        partie1: " Who ",
        partie2: " to? ",
        partie3: "",
        verb1: "(you, to talk)",
        verb2: ""
      },
      {
        id: 5,
        partie1: " In the winter, the sun ",
        partie2: "early.",
        partie3: "",
        verb1: "(to set)",
        verb2: ""
      },
      {
        id: 6,
        partie1: " The church bell ",
        partie2: "for Mass every Sunday.",
        partie3: "",
        verb1: "(to ring)",
        verb2: ""
      },
      {
        id: 7,
        partie1: " ",
        partie2: "to me?",
        partie3: "to repeat myself.",
        verb1: "(you, to listen)",
        verb2: "(I, not, go)"
      },
      {
        id: 8,
        partie1: " ",
        partie2: " his name.",
        partie3: "",
        verb1: "(I, not, to remember)",
        verb2: ""
      },
      {
        id: 9,
        partie1: " No, ",
        partie2: " ; I am awake.",
        partie3: "",
        verb1: "(I, not, to sleep)",
        verb2: ""
      }
    ]
  };

  TabRep = {
    rep: [
      { id: 1, texte: " Joan plays football every day." },
      { id: 2, texte: " Who is walking on the grass?" },
      { id: 3, texte: " We always speak softly while Mother is sleeping ." },
      { id: 4, texte: " Who are you talking to?" },
      { id: 5, texte: " In the winter, the sun sets early." },
      { id: 6, texte: " The church bell rings for Mass every Sunday." },
      { id: 7, texte: " I am not going to repeat myself. " },
      { id: 8, texte: " I do not remember his name." },
      { id: 9, texte: " No, I am not sleeping ; I am awake." }
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
    const QuestionsExo = this.TabQu.qu.map(
      function (exo) {
        if (exo.verb2 == "") {
          return (
            <li>
              <h4>
                {exo.id}. {exo.partie1}&ensp;
                <input
                  type="text"
                  onChange={this.getData}
                  placeholder="Réponse"
                  name="donnees"
                  value={this.state.nom}
                />
                {exo.partie2} <font color="blue">{exo.verb1}</font>
              </h4>
            </li>
          );
        } else {
          return (
            <li>
              <h4>
                {exo.id}. {exo.partie1}&ensp;
                <input type="text" placeholder="Réponse" />
                <font color="blue">{exo.verb1}</font> {exo.partie2}&ensp;
                <input type="text" placeholder="Réponse" /> {exo.partie3}{" "}
                <font color="blue">{exo.verb2}</font>
              </h4>
            </li>
          );
        }
      }.bind(this)
    );
    const ReponsesExo = this.TabRep.rep.map(function (exo) {
      return (
        <li>
          <h4>
            {exo.id}. {exo.texte}&ensp;
          </h4>
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h4>
            <u>{title}</u>
          </h4>
          <br />
          <h5>
            Traduisez les phrases suivantes : <br />
            <br />
            {QuestionsExo}
            <br />
            {x && <h4>{ReponsesExo}</h4>}
          </h5>
          <br />
          <button onClick={HandleChange1}>Terminer</button>
          <button>RéponsesUtilisateur</button>

          <br />
          <h5>
            <Link to="/ExoConj">Retour à la liste d'exercices</Link>
          </h5>
        </form>
        {this.renderDonnees()}
      </div>
    );
  }
}

export default ExoConj1;
