import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import { TopBanner } from './Banners.js';
import App from './App';
import Companies from './Companies';
import Stock from './Stock';

export default class RouteHandler extends Component {
	render() {
		return (
			<Provider store={configureStore()}>
				<Router>
					<div>
						<TopBanner />
						<Switch>
							<Route path="/" exact component={App} />
							<Route path="/companies" component={Companies} />
							<Route path="/symbol/:symbol" component={CompaniesWrappedStock} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

const CompaniesWrappedStock = (props) =>(
	<Companies>
		<Stock />
	</Companies>
);