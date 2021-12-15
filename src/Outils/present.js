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
            <h4>
              <u>{title}</u>
            </h4>
            <br />
            <h5>
              Comment le former C’est la fameuse forme en V+ing qui pose tant de
              problèmes aux francophones. Il se forme avec « être » (to be),
              suivi du participe présent, c’est-à-dire le verbe auquel on ajoute
              la terminaison -ing. Conjuguons, par exemple, le verbe to scream
              (crier). I am screaming you are screaming he / she is screaming we
              are screaming you are screaming they are screaming Négation : I am
              not screaming ou I’m not screaming Interrogation : am I screaming?
              Interro-négation : am I not screaming? Encore une fois, ce n’est
              pas bien compliqué, il suffit de connaître la conjugaison du verbe
              to be. Attention cependant, le radical de certains verbes peut
              changer lorsque l’on forme le participe présent ou passé. Voici
              les cas qui posent problème : Redoublement de la consonne : bet →
              betting, fit → fitting. Chute du e final lorsqu’il est muet : take
              → taking, observe → observing. Mais pas toujours : age → ageing
              (en anglais britannique) Voyelle i qui devient y : lie → lying,
              tie → tying. Verbe dont le radical se termine par c : panic →
              panicking. Quand l’utiliser Le présent continu correspond tout
              d’abord à notre « être en train de faire », il désigne donc une
              action qui se produit au moment où l’on parle et qui n’est donc
              pas terminée. « Je suis en train de manger une pomme » se dira en
              anglais I’m eating an apple. Plus rarement, il permet de décrire
              une action qui n’a lieu qu’à un instant très précis et qui
              n’aurait pas cours autrement. Par exemple, You’re being foolish
              (tu es en train de te comporter comme un idiot), par opposition
              avec You’re foolish (tu es idiot).
            </h5>
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
