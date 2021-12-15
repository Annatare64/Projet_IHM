import React from "react"
import {Link, NavLink} from "react-router-dom"
import {render} from "react-dom"
import ReactDOM from "react-dom"
import "../../CSS/Exo.css"

class ExoGramm1 extends React.Component {
	state = {
		divcontainer1: false
	}

	TabQu = {
		qu: [
			{id: 1, texte: " Depuis 10 ans."},
			{id: 2, texte: " Je voyage depuis 2 mois."},
			{id: 3, texte: " Ca fait 2 heures que j'attends !"},
			{id: 4, texte: " Il y a 40 ans."},
			{id: 5, texte: " Depuis 1960."}
		]
	}

	TabRep = {
		rep: [
			{id: 1, texte: " For 10 years."},
			{id: 2, texte: " I've been travelling for 2 months."},
			{id: 3, texte: " I’ve been waiting for you for two hours!"},
			{id: 4, texte: " 40 years ago."},
			{id: 5, texte: " Since 1960."}
		]
	}

	onSubmit = (event) => {
		event.preventDefault()
	}
	Terminer() {
		console.log("oui")
	}

	render() {
		var HandleChange1 = (e) => {
			this.setState({divcontainer1: !this.state.divcontainer1})
		}
		const x = this.state.divcontainer1

		const title = "For, since, ago"
		const QuestionsExo = this.TabQu.qu.map(function (exo) {
			return (
				<li>
					<h4>
						{exo.id}. {exo.texte}&ensp;
						<input type="text" placeholder="Réponse" />
					</h4>
				</li>
			)
		})
		const ReponsesExo = this.TabRep.rep.map(function (gra) {
			return (
				<li>
					<h4>
						{gra.id}. {gra.texte}&ensp;
					</h4>
				</li>
			)
		})

		return (
			<div className="tete2">
				<div className="container2">
					<form id="form5" onSubmit={this.onSubmit}>
						<h4 className="Titre2">
							<u>{title}</u>
						</h4>
						<br />
						<div className="ExoCentre">
							<h5>
								Traduisez les phrases suivantes : <br />
								<br />
								{QuestionsExo}
								<br />
								{x && <h4>{ReponsesExo}</h4>}
							</h5>
							<br />
							<button className="Term1" onClick={HandleChange1}>
								Terminer
							</button>

							<br />
							<h5>
								<Link to="/ExoGramm">Retour à la liste d'exercices</Link>
							</h5>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default ExoGramm1
