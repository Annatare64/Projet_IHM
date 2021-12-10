import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import ExoVocab from "./AtelierExercices/ExoVocabulaires";
import ExoGramm from "./AtelierExercices/ExoGrammaires";
import ExoConj from "./AtelierExercices/ExoConjugaison";
import Magazines from "./Magazines/magazines";
import Accueil from "./Accueil/accueil";
import Guide from "./Outils/Guide";
import Lexique from "./Outils/Lexique";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Styles_EnTete.css";

class EnTete extends React.Component {
  Site = "English Learn";

  render() {
    return (
      <div className="En-tete1">
        <h1 className="Titre">&ensp;{this.Site}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Accueil">Accueil</Link>
            </li>
            <li>
              <Link to="/Magazines">Magazines &ensp;</Link>
            </li>
            <li className="deroulant">
              <a>Atelier &ensp;</a>
              <ul className="sous">
                <li>
                  <Link to="/ExoGramm">Grammaire</Link>
                </li>
                <li>
                  <Link to="/ExoConj">Conjugaison</Link>
                </li>
                <li>
                  <Link to="/ExoVocab">Vocabulaire</Link>
                </li>
              </ul>
            </li>
            <li className="deroulant">
              <a>Outils&ensp;</a>
              <ul className="sous">
                <li>
                  <Link to="/Lexique">Lexique</Link>
                </li>
                <li>
                  <Link to="/Guide">Guide grammatical</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default EnTete;
