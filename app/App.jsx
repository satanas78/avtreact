import React from "react";
import MenuActions from "./MenuActions";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";

var App = React.createClass({

	render: function() {
		return (
			<div>
				<MenuActions/>
				<SearchBar/>
				<DocumentList />
			</div>
			);
	}

});

module.exports = App;