import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Guide from "./Guide";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Outils.css";

class Présent extends React.Component {
  state = {
    divcontainer1: false,
    id: 0,
    donnees: "",
    TabInput: []
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

  displayGramm() {
    const guide = document.getElementById("body");
    ReactDOM.render(<Guide />, guide);
  }

  render() {
    const title = "Simple Present - présent simple";

    return (
      <div className="tete1">
        <div className="container1">
          <form className="formulaire" onSubmit={this.onSubmit}>
            <h3>
              <u>{title}</u>
            </h3>
            <br />
            <h4>Qu’est-ce que le présent simple anglais ?</h4>
            <h5>
              <br />
              On emploie le présent simple anglais (simple present) pour parler
              de faits habituels ou plus ou moins permanents (actions qui se
              répètent), de vérités générales, d’actions qui se succèdent ou de
              faits à venir qui auront lieu à un horaire déterminé et officiel.
              Le présent simple anglais n’est pas lié à un moment précis du
              présent comme en français. Grâce à nos explications simples et
              claires accompagnées de nombreux exemples, tu apprendras tout ce
              qu’il faut savoir sur l’emploi et la règle de formation du présent
              simple en anglais et tu pourras tester tes nouvelles connaissances
              avec nos exercices.
            </h5>
            <br />
            <h4> Quand employer le présent simple en anglais ?</h4>
            <br />
            <h5>
              En anglais, on utilise le présent simple dans les cas suivants :
              <br />
              <br /> Actions régulières ou (in)habituelles (always, never,
              rarely, often) <br />
              Exemple : He plays football every Tuesday. <br />
              <br /> Actions successives, sans commentaire
              <br /> Exemple : After school Colin goes home, packs his bag, puts
              on his football shirt and then he goes to football training.
              <br />
              <br /> Vérités générales, faits plus ou moins permanents,
              caractéristiques (avec des verbes d’état notamment)
              <br />
              Exemples : He is a forward. A forward tries to score goals for his
              team. <br />
              <br />
              Renvoi à un fait à venir (il est certain qu’il aura lieu),
              horaire/programme officiel (toujours avec un repère temporel)
              <br /> Exemples : The bus leaves at half past four. His training
              starts at five o’clock.
              <br /> <br />
              Verbes d’opinion et de perception pour exprimer une opinion, un
              goût, un souhait, un sentiment, etc. <br />
              Exemple : Colin likes football
            </h5>
            .
            <br />
            <br />
            <h5>
              <Link to="/Guide">Retour aux leçons</Link>
            </h5>
          </form>
          {this.renderDonnees()}
        </div>
      </div>
    );
  }
}

export default Présent;
