"use strict";
import "./style.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import Document from "./Document";
import DocumentEdit from "./DocumentEdit";
import NotFound from "./NotFound";
import Router from "react-router";
import { DefaultRoute, Link, Route, RouteHandler, NotFoundRoute, Redirect } from "react-router";

let App = React.createClass({
  render() {
    return (
		<div>
			<ul className="nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
			<RouteHandler/>
		</div>
    );
  }
});

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/about" handler={About}/>
    <Route name="document" path="/doc/:id" handler={Document}/>
    <Route name="documentEdit" path="/doc/:id/edit" handler={DocumentEdit}/>
    <NotFoundRoute handler={NotFound} />
    <Redirect from="doc" to="/" />
  </Route>
);

Router.run(routes,
	Router.HistoryLocation, //retire le # dans les adresses
	function (Handler) {
  React.render(<Handler/>, document.getElementById("content"));
});
