import React from 'react';
import '../App.css';

class MenuIcon extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fill: "#363636",
			width: this.props.width || "494pt",
			height: this.props.height || "494pt"
		}
	}

	onMouseEnter() {
		this.setState({fill: "#303030"});
	}

	onMouseLeave() {
		this.setState({fill: "#363636"});
	}

	render() {
		return (
			<svg id="icon" xmlns="http://www.w3.org/2000/svg"
 				width={this.state.width} height={this.state.height} viewBox="0 0 494.000000 494.000000"
				preserveAspectRatio="xMidYMid meet" onMouseEnter={() => this.onMouseEnter()} 
				onMouseLeave={() => this.onMouseLeave()}>
				<g transform="translate(0.000000,494.000000) scale(0.100000,-0.100000)"
					fill={this.state.fill} stroke="none">
					<path d="M592 4929 c-232 -39 -429 -191 -532 -411 -64 -136 -61 -23 -58 -2080
						l3 -1873 29 -84 c73 -209 245 -379 453 -447 l88 -29 1895 0 1895 0 70 23 c241
						81 413 259 482 502 17 62 18 149 18 1935 0 2102 7 1914 -77 2085 -33 69 -58
						102 -132 176 -74 74 -107 99 -176 132 -172 84 23 77 -2055 78 -1036 1 -1873
						-2 -1903 -7z m3411 -883 c43 -18 83 -66 120 -145 66 -140 41 -312 -62 -424
						-55 -61 56 -57 -1592 -57 l-1511 0 -39 22 c-63 35 -128 153 -144 260 -18 117
						70 305 160 344 45 20 3021 20 3068 0z m2 -1275 c47 -21 85 -67 123 -149 24
						-50 27 -69 27 -157 0 -88 -3 -107 -27 -157 -15 -32 -39 -73 -53 -92 -54 -71
						73 -66 -1610 -66 -1671 0 -1548 -5 -1598 62 -66 88 -103 206 -93 292 8 58 52
						161 93 215 14 18 44 42 67 52 39 18 97 19 1536 19 1425 0 1497 -1 1535 -19z
						m-2 -1275 c18 -7 48 -30 66 -52 112 -127 121 -337 20 -478 -68 -95 94 -86
						-1626 -86 -1730 0 -1548 -10 -1617 93 -51 78 -68 131 -70 212 -1 85 21 153 75
						234 67 100 -100 91 1612 91 1244 0 1513 -2 1540 -14z"/>
				</g>
			</svg>
		);
	}
}

export default MenuIcon;