var React = require('react');
import { Link } from 'react-router';
export default class extends React.Component {
	constructor(props){
		super(props);
	}

	render() { 
		var docs = this.props.docs.map(doc => 				
			<tr key={doc.id}>
				<td><Link to="/doc/:id" params={{ id: doc.id }}>{doc.ref}</Link></td>
				<td>{doc.title}</td>
				<td>{doc.MonNombre}</td>
			</tr>
		);
		return (
			<span> 
			<table>
				{docs}
			</table>
			</span>
		);
	}

};
