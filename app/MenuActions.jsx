"use strict";
import React from "react";
import reactMixin from "react-mixin";
import {Navigation} from "react-router";

@reactMixin.decorate(Navigation)
export default class MenuActions extends React.Component{

	handleClick ( e){
		e.preventDefault();
		this.transitionTo("/doc/3/edit");
	}

	render() {

		return (
			<button onClick={e => this.handleClick(e)}>Créer un document</button>
		);
	}
}
