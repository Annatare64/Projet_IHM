import React from "react"
import {render} from "react-dom"
import ReactDOM from "react-dom"
import "../../CSS/Exo.css"
import ExoVocab from "../ExoVocabulaires"
import {Link, NavLink} from "react-router-dom"

class ExoVoc extends React.Component {
	state = {
		divcontainer1: false
	}

	Terminer() {
		console.log("oui")
	}

	onSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<div className="tete2">
				<div className="container2">
					<form onSubmit={this.onSubmit}>
						<div className="ExoCentre">
							<h4>
								1 : <input placeholder="Réponse" /> <br />
								130 : <input placeholder="Réponse" /> <br />
							</h4>
							<button className="Term1">Terminer</button>

							<br />
							<Link to="/ExoVocab">Retour à la liste d'exercices</Link>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default ExoVoc
