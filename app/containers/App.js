import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import StudioPage from './StudioPage';
import PlacesPage from './PlacesPage';
import TestPage from './TestPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
	componentWillMount() {}
	onSetSidebarOpen() {}
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route path="/places" component={PlacesPage} />
					<Route path="/test" component={TestPage} />
					<Route path="/studio" component={StudioPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
