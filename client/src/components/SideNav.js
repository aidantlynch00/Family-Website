import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import MenuIcon from '../components/MenuIcon.js';

class SideNav extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			width: ''
		}
	}

	open() {
		this.setState({width: '250px'});
	}

	close() {
		this.setState({width: '0px'});
	}

	render() {
		return (
			<div>
				<div className="SideNav" style={{width: this.state.width}}> 
					<button id="closebtn" onClick={() => this.close()}>&times;</button>
					<Link to="/">Home</Link>
					<Link to="/family-tree">Family Tree</Link>
				</div>

				<span onClick={() => this.open()}>
					<MenuIcon width="4vmin" height="4vmin" />
				</span>
			</div>
		);
	}
}

export default SideNav;