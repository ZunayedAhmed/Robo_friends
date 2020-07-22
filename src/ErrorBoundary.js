import React, { Component } from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			haserrpr:false
		}
	}

	componentDidCatch(error, info){
		this.setState({haserror:true});

	}

	render(){
		if(this.state.haserror){
			return <h1>OOOPPPPS.that is no good </h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;