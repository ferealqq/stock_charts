import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './App';
import Stock from './Stock';

export default class RouteHandler extends Component {
	render() {
		return (
			<Provider store={configureStore()}>
				<Router>
					<App>
						<Switch>
							<Route path="/symbol/:symbol" component={Stock} />
						</Switch>
					</App>
				</Router>
			</Provider>
		);
	}
}
