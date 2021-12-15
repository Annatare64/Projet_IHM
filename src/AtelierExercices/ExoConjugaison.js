import React from "react"
import ReactDOM from "react-dom"
import "../CSS/Styles_Atelier.css"
import {Link, NavLink} from "react-router-dom"
import ExoConj1 from "./exercices/ConjExo"

class ExoConj extends React.Component {
	state = {
		divcontainer1: true,
		divcontainer2: false,
		divcontainer3: false
	}

	TabEx = {
		exercices: [
			{
				id: 1,
				difficulté: "Facile",
				type: "Exercice",
				temps: "Simple Present - présent simple"
			},
			{
				id: 2,
				difficulté: "Facile",
				type: "Exercice",
				temps: "Present Perfect and Past"
			},
			{
				id: 3,
				difficulté: "Modéré",
				type: "Exercice",
				temps: "Past Perfect simple - plus-que-parfait"
			},
			{
				id: 4,
				difficulté: "Modéré",
				type: "Exercice",
				temps: "Infinitive or Gerund - inifinitif ou gérondif"
			},
			{
				id: 5,
				difficulté: "Modéré",
				type: "Exercice",
				temps: "Passive voice - voix passive"
			},
			{id: 6, difficulté: "Modéré", type: "Exercice", temps: "The futur"},
			{
				id: 7,
				difficulté: "Difficile",
				type: "Exercice",
				temps: "Conditionnal Present"
			},
			{
				id: 8,
				difficulté: "Difficile",
				type: "Exercice",
				temps: "Conditionnal Past"
			},
			{
				id: 9,
				difficulté: "Difficile",
				type: "Exercice",
				temps: "Simple Present - présent simple"
			},
			{
				id: 10,
				difficulté: "Facile",
				type: "Exercice",
				temps: "Present Continuous"
			},
			{
				id: 3,
				difficulté: "Modéré",
				type: "Exercice",
				temps: "Past Perfect continuous"
			}
		]
	}

	displayExoConj() {
		const exo = document.getElementById("body")
		ReactDOM.render(<ExoConj1 />, exo)
	}

	onSubmit = (event) => {
		event.preventDefault()
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

		const title = "Exercices de Conjugaison :"
		const elementsFacile = this.TabEx.exercices.map(
			function (exo) {
				if (exo.difficulté == "Facile") {
					return (
						<li className="LiExo">
							<h4> {exo.temps} </h4>
							<Link to="/ExoConj1">&ensp;Exercice 1 </Link>
							<br />
							<a href="#" /*onClick={displayExoConj}*/>&ensp;Exercice 2 </a>
						</li>
					)
				}
			}.bind(this)
		)
		const elementsModéré = this.TabEx.exercices.map(
			function (exo) {
				if (exo.difficulté == "Modéré") {
					return (
						<li className="LiExo">
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
						<li className="LiExo">
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
			<div className="tete2">
				<div className="container2">
					<form onSubmit={this.onSubmit}>
						<h4>
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

export default ExoConj
