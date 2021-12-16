import {useState} from "react"
import {useEffect} from "react"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import {render} from "react-dom"
import "../CSS/accueil.css"
import Magazines from "../Magazines/magazines"
import {Link, NavLink} from "react-router-dom"
import logo from "../../public/image/drapeau.jpg"

class Accueil extends Component {
	render() {
		return (
			<div className="tete4">
				<div className="container4">
					<div>
						<img id="drapeau" src={logo} />
					</div>
					<div className="Divaccueil">
						<Link to="/Magazines">
							<button className="btnacc">Je me documente sur l'actualité en anglais</button>
						</Link>
						<Link to="/Lexique">
							<button className="btnacc">Je révise des lexiques ou des leçons d'anglais</button>
						</Link>
						<Link to="/ExoGramm">
							<button className="btnacc">Je m'entraine avec divers exercices d'anglais</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default Accueil
