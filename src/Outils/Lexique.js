import React from "react"
import ReactDOM from "react-dom"
import Present from "./present"
import Vetement from "./Vetement"
import "../CSS/Outils.css"
import {Link, NavLink} from "react-router-dom"

class Lexique extends React.Component {
	state = {
		divcontainer1: false,
		divcontainer2: false,
		divcontainer3: false
	}

	TabLex = {
		vocabulaire: [
			{
				id: 1,
				Theme: "Vie Quotidienne",
				type: "Les vêtements"
			},
			{
				id: 2,
				Theme: "Vie Quotidienne",
				type: "Les sports"
			},
			{
				id: 3,
				Theme: "Vie Quotidienne",
				type: "Le commerce"
			},
			{
				id: 4,
				Theme: "Passé",
				type: "Le passé continu (past continuous)"
			},
			{
				id: 5,
				Theme: "Passé",
				type: "Le passé composé (Vie Quotidienne perfect)"
			},
			{
				id: 6,
				Theme: "Passé",
				type: "Le passé composé continu (Vie Quotidienne perfect continuous)"
			},
			{
				id: 7,
				Theme: "Passé",
				type: "Le plus-que-parfait (past perfect)"
			},
			{
				id: 8,
				Theme: "Futur",
				type: "Le futur simple (future simple)"
			},
			{
				id: 9,
				Theme: "Futur",
				type: "Le futur continu (future continuous)"
			},
			{
				id: 10,
				Theme: "Futur",
				type: "Le futur antérieur (future perfect)"
			},
			{
				id: 3,
				Theme: "Modéré",
				type: "Exercice"
			}
		]
	}
	onSubmit = (event) => {
		event.preventDefault()
	}

	displayVet() {
		const Vet = document.getElementById("body")
		ReactDOM.render(<Vetement />, Vet)
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

		const title = "Vocabulaire :"
		const elementsFacile = this.TabLex.vocabulaire.map(
			function (voc) {
				if (voc.Theme == "Vie Quotidienne") {
					return (
						<li>
							<Link to="/Vetement">
								&ensp;{voc.type}: {voc.nom}
							</Link>
						</li>
					)
				}
			}.bind(this)
		)
		const elementsModéré = this.TabLex.vocabulaire.map(
			function (voc) {
				if (voc.Theme === "Passé") {
					return (
						<li>
							<a href="#" onClick={() => this.displayvocVocab(voc.id)}>
								&ensp;{voc.type}: {voc.nom}
							</a>
						</li>
					)
				}
			}.bind(this)
		)
		const elementsDifficile = this.TabLex.vocabulaire.map(
			function (voc) {
				if (voc.Theme == "Futur") {
					return (
						<li>
							<a href="#" onClick={() => this.displayvocVocab(voc.id)}>
								&ensp;{voc.type}: {voc.nom}
							</a>
						</li>
					)
				}
			}.bind(this)
		)

		return (
			<div className="tete1">
				<div className="container1">
					<form onSubmit={this.onSubmit}>
						<h4 className="Titre2">
							<u>{title}</u>
						</h4>
						<br />
						<h5>
							<button className="bouton1" onClick={HandleChange1}>
								Vie Quotidienne
							</button>
							{x && <h5>{elementsFacile}</h5>}
						</h5>
						<h5>
							<button className="bouton1" onClick={HandleChange2}>
								Monde du Travail
							</button>
							{y && (
								<h5>
									<a href="#" onClick={this.displayvoc1Vocab}>
										{elementsModéré}
									</a>
								</h5>
							)}
						</h5>
						<h5>
							<button className="bouton1" onClick={HandleChange3}>
								Futur
							</button>
							{z && (
								<h5>
									<a href="#" onClick={this.displayvoc1Vocab}>
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

export default Lexique
