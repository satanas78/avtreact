import React from "react";
import reactMixin from 'react-mixin';
import {Navigation} from 'react-router';

export default class MenuActions extends React.Component{

	handleClick(e){
		e.preventDefault();
		this.transitionTo('/doc/3/edit');
	}

	render() {

		return (
			<button onClick={this.handleClick.bind(this)}>Créer un document</button> 
		);
	}

};

reactMixin.onClass(MenuActions, Navigation);