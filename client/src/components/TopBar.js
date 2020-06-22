import React from 'react';
import '../App.css';
import SideNav from './SideNav';

class TopBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="TopBar">
				<SideNav />
			</div>
		);
	}
}

export default TopBar;