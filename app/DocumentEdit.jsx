"use strict";
import React from "react";
import Document from "./Document";
import {Link } from "react-router";

export default class extends React.Component {
	render() {
		return (
			<div>
				<h1>Document Edit</h1>
				<div>
					<Link to="document" params={{ id: 1 }}>Valider</Link>
					<Link to="document" params={{ id: 1 }}>annuler</Link>
				</div>
			</div>
		);
	}
}
