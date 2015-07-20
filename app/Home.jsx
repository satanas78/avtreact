import React from "react";
import MenuActions from "./MenuActions";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";

export default class extends React.Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<MenuActions/>
				<SearchBar/>
				<DocumentList />
			</div>
		);
	}
}
