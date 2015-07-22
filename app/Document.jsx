"use strict";
import React from "react";
import DocumentEdit from "./DocumentEdit";
import {Link } from "react-router";

export default class extends React.Component {
	render() {
		return (
			<div>
				<h1>Document</h1>
				<div>
					<Link to="documentEdit" params={{ id: 1 }}>Editer</Link>
				</div>
			</div>
		);
	}
}
