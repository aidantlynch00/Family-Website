import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import FamilyTree from './pages/FamilyTree';

class App extends React.Component {

	constructor(props){
		super(props);
	}

  	render() {
    	return (
      		<div className="App">
        		<header>
					<TopBar />
        		</header>

				<div className="body">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/family-tree" exact component={FamilyTree} />
					</Switch>
				</div>
      		</div>
    	);
  	}
}

export default App;
