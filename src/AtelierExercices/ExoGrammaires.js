import React from "react"
import ReactDOM from "react-dom"
import "../CSS/Styles_Atelier.css"
import {Link, NavLink} from "react-router-dom"

import Exo1 from "./exercices/GrammExo1.js"
import "./stylebouton.css"

class ExoGramm extends React.Component {
	state = {
		divcontainer1: true,
		divcontainer2: false,
		divcontainer3: false
	}

	TabEx = {
		exercices: [
			{id: 1, difficulté: "Facile", type: "Exercice", nom: "For, since, ago"},
			{
				id: 2,
				difficulté: "Facile",
				type: "Exercice",
				nom: "Les auxiliaires en anglais"
			},
			{
				id: 3,
				difficulté: "Facile",
				type: "Exercice",
				nom: "Construire des phrases"
			},
			{
				id: 4,
				difficulté: "Modéré",
				type: "Exercice",
				nom: "Impératif en anglais"
			},
			{
				id: 5,
				difficulté: "Modéré",
				type: "Exercice",
				nom: "Le futur - Will et Going to"
			},
			{
				id: 6,
				difficulté: "Modéré",
				type: "Exercice",
				nom: "Prétérit simple et progressif"
			},
			{
				id: 7,
				difficulté: "Difficile",
				type: "Exercice",
				nom: "Le present perfect"
			},
			{
				id: 8,
				difficulté: "Difficile",
				type: "Exercice",
				nom: "Some, any, no"
			},
			{
				id: 9,
				difficulté: "Difficile",
				type: "Exercice",
				nom: "L'art en anglais"
			}
		]
	}

	onSubmit = (event) => {
		event.preventDefault()
	}

	displayExoVocab(value) {
		const exo1 = document.getElementById("body")
		if (value === 1) {
			ReactDOM.render(<Exo1 />, exo1)
		}
		/*else if (value === 2) {
			ReactDOM.render(<Exo2 />, exo1)
		} else if (value === 3) {
			ReactDOM.render(<Exo2 />, exo1)
		}*/
	}

	render() {
		var HandleChange1 = (e) => {
			this.setState({divcontainer1: !this.state.divcontainer1})
		}
		var HandleChange2 = (e) => {
			this.setState({divcontainer2: !this.state.divcontainer2})
		}
		var HandleChange3 = (e) => {
			this.setState({divcontainer3: !this.state.divcontainer3})
		}
		const x = this.state.divcontainer1
		const y = this.state.divcontainer2
		const z = this.state.divcontainer3

		const title = "Exercices de Grammaire :"
		const elementsFacile = this.TabEx.exercices.map(
			function (exo) {
				if (exo.difficulté == "Facile") {
					return (
						<li>
							<Link to="/ExoGramm1">
								&ensp;{exo.type}
								{exo.id} : {exo.nom}{" "}
							</Link>
						</li>
					)
				}
			}.bind(this)
		)
		const elementsModéré = this.TabEx.exercices.map(
			function (exo) {
				if (exo.difficulté == "Modéré") {
					return (
						<li>
							<a href="#" onClick={() => this.displayExoVocab(exo.id)}>
								&ensp;{exo.type}
								{exo.id} : {exo.nom}{" "}
							</a>
						</li>
					)
				}
			}.bind(this)
		)
		const elementsDifficile = this.TabEx.exercices.map(
			function (exo) {
				if (exo.difficulté == "Difficile") {
					return (
						<li>
							<a href="#" onClick={() => this.displayExoVocab(exo.id)}>
								&ensp;{exo.type}
								{exo.id} : {exo.nom}{" "}
							</a>
						</li>
					)
				}
			}.bind(this)
		)

		return (
			<div className="tete">
				<div className="container">
					<form onSubmit={this.onSubmit}>
						<h4 id="titre">
							<u>{title}</u>
						</h4>
						<h5>
							<button className="bouton" onClick={HandleChange1}>
								Facile
							</button>
							{x && <h5>{elementsFacile}</h5>}
						</h5>
						<h5>
							<button className="bouton" onClick={HandleChange2}>
								Modéré
							</button>
							{y && (
								<h5>
									<a href="#" onClick={this.displayExo1Vocab}>
										{elementsModéré}
									</a>
								</h5>
							)}
						</h5>
						<h5>
							<button className="bouton" onClick={HandleChange3}>
								Difficile
							</button>
							{z && (
								<h5>
									<a href="#" onClick={this.displayExo1Vocab}>
										{elementsDifficile}
									</a>
								</h5>
							)}
						</h5>
					</form>
				</div>
			</div>
		)
	}
}

export default ExoGramm
