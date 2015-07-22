"use strict";
import React from "react";
import MenuActions from "./MenuActions";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";
import {data} from "./data";

export default class extends React.Component {
	render() {
		return (
			<div>
				<h1>Home2</h1>
				<MenuActions/>
				<SearchBar/>
				<DocumentList docs={data.docs} />
			</div>
		);
	}
}
