var React = require('react');

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state={docs:[
			{
				id: 1,
				ref:'REF-0001',
				title:'Mon Titre', 
				MonNombre:'123'
			},{
				id: 2,
				ref:'REF-0002',
				title:'Mon Titre 2', 
				MonNombre:'564'
			}]};
	}

	render() { 
		var docs = this.state.docs.map(doc => 				
			<tr key={doc.id}>
				<td><a href="#">{doc.ref}</a></td>
				<td>{doc.title}</td>
				<td>{doc.MonNombre}</td>
			</tr>
		);
		return (
			<table>
				{docs}
			</table>
		);
	}

};
