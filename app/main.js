import "./style.css";
import React from "react";
import Home from "./Home";
import About from "./About";
import Document from "./Document";
import NoMatch from "./NoMatch";
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let App = React.createClass({  
  render() {
    return (
		<div>
			<ul className="nav">
				<li><Link to="home">Home</Link></li>
				<li><Link to="about">About</Link></li>
			</ul>
			<RouteHandler/>
		</div>
    );
  }
});

let routes = (  
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute name="home" handler={Home} />
    <Route name="about" path="/about" handler={About}/>
    <Route name="document" path="/doc/:id" handler={Document}/>
    <Route name="nomatch" path="*" handler={NoMatch}/>
  </Route>
);

Router.run(routes, 
	Router.HistoryLocation, //retire le # dans les adresses
	function (Handler) {  
  React.render(<Handler/>, document.getElementById('content'));
});