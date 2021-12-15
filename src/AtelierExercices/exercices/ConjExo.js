import React, {Component} from "react"
import {render} from "react-dom"
import ReactDOM from "react-dom"
import {Link, NavLink} from "react-router-dom"

import "../../CSS/Exo.css"

class ExoConj1 extends React.Component {
	state = {
		divcontainer1: false,
		divcontainer2: true,
		id: 0,
		donnees: "",
		TabInput: []
	}

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
	}

	TabRep = {
		rep: [
			{id: 1, texte1: " Joan ", verb: "plays", texte2: " football every day."},
			{id: 2, texte1: " Who ", verb: "is walking", texte2: " on the grass?"},
			{id: 3, texte1: " We always ", verb: "speak", texte2: " softly while Mother is sleeping ."},
			{id: 4, texte1: " Who ", verb: "are you talking", texte2: " to?"},
			{id: 5, texte1: " In the winter, the sun ", verb: "sets", texte2: " early."},
			{id: 6, texte1: " The church bell ", verb: "rings", texte2: " for Mass every Sunday."},
			{id: 7, texte1: " I ", verb: "am not going", texte2: " to repeat myself."},
			{id: 8, texte1: " I ", verb: "do not remember", texte2: " his name."}
		]
	}

	getData = (event) => {
		/*TabInput[val.target.name]=val.target.value
    console.log("value dans le tableau : " + TabInput[val.target.name])*/
		this.setState({
			[event.target.name]: event.target.value
		})

		console.log("get data : " + this.state.donnees)

		/*console.log(event.target.name)
		console.log(event.target.value)*/
		/*console.log("state : " + this.state.donnees)*/
	}

	onSubmit = (event) => {
		event.preventDefault()
		console.log(this.state.donnees)
		this.setState({
			TabInput: [...this.state.TabInput, {donnees: this.state.donnees}],
			donnees: ""
		})
	}

	renderDonnees = () => {
		return this.state.TabInput.map((item) => {
			return <h5>{item.donnees}</h5>
		})
	}

	render() {
		var HandleChange1 = (e) => {
			this.setState({divcontainer1: !this.state.divcontainer1})
			this.setState({divcontainer2: !this.state.divcontainer2})
		}
		const x = this.state.divcontainer1
		const y = this.state.divcontainer2

		const title = "Simple Present - présent simple"
		const QuestionsExo = this.TabQu.qu.map(
			function (exo) {
				if (exo.verb2 == "") {
					return (
						<li>
							<h4>
								{exo.id}. {exo.partie1}&ensp;
								<input type="text" onChange={this.getData} placeholder="Réponse" name="donnees" value={this.state.nom} />
								{exo.partie2} <font color="blue">{exo.verb1}</font>
							</h4>
						</li>
					)
				} else {
					return (
						<li>
							<h4>
								{exo.id}. {exo.partie1}&ensp;
								<input type="text" placeholder="Réponse" />
								<font color="blue">{exo.verb1}</font> {exo.partie2}&ensp;
								<input type="text" placeholder="Réponse" /> {exo.partie3} <font color="blue">{exo.verb2}</font>
							</h4>
						</li>
					)
				}
			}.bind(this)
		)
		const ReponsesExo = this.TabRep.rep.map(function (exo) {
			if (exo.id === 1 || exo.id === 2) {
				return (
					<li>
						<h4>
							{exo.id}. {exo.texte1} <font color="green">{exo.verb}</font> {exo.texte2}
						</h4>
					</li>
				)
			} else {
				return (
					<li>
						<h4>
							{exo.id}. {exo.texte1} <font color="red">{exo.verb}</font> {exo.texte2}
						</h4>
					</li>
				)
			}
		})

		return (
			<div className="tete2">
				<div className="container2">
					<div>
						<form onSubmit={this.onSubmit}>
							<h4 className="Titre2">
								<u>{title}</u>
							</h4>
							<br />
							<div id="ExoCentre2">
								<h5>
									Traduisez les phrases suivantes : <br />
									<br />
									{y && <h4>{QuestionsExo}</h4>}
									{x && <h4>{ReponsesExo}</h4>}
								</h5>
								<br />
								<button className="Term1" onClick={HandleChange1}>
									Terminer
								</button>
								<br />
								<h5>
									<Link to="/ExoConj">Retour à la liste d'exercices</Link>
								</h5>
							</div>
						</form>
						{this.renderDonnees()}
					</div>
				</div>
			</div>
		)
	}
}

export default ExoConj1
