import React from 'react';
import '../App.css';
import logo from '../assets/coat.png';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<img src={logo} className="Logo" alt="logo" />
		);
	}
}

export default Home;