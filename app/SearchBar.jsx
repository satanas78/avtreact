var React = require('react');

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state = {val:''};
	}
	handleChange(e){
		this.setState({val:e.target.value});
	}
	clickHandle(e){
		this.setState({val:''});
	}
	render() {
		return (
			<input type="text" value={this.state.val} onChange={this.handleChange.bind(this)} onClick={this.clickHandle.bind(this)} placeholder="Filtrer…"/>
		);
	}

};