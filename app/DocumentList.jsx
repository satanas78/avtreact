var React = require('react');
import { Link } from 'react-router';
export default class extends React.Component {
	constructor(props){
		super(props);
		this.state={docs:[
			{
				id: 1,
				ref:'REF-001',
				title:'Mon Titre', 
				MonNombre:'123'
			},{
				id: 2,
				ref:'REF-002',
				title:'Mon Titre 2', 
				MonNombre:'564'
			}]};
	}

	render() { 
		var docs = this.state.docs.map(doc => 				
			<tr key={doc.id}>
				<td><Link to="document" params={{ id: doc.ref }}>{doc.ref}</Link></td>
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
