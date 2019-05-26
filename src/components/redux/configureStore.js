import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import dataReducers from './dataReducers';

// configures the redux store for the application.
export default function configureStore() {
	const middleware = [
		thunkMiddleware,
		process.env.NODE_ENV === 'development' && createLogger(),
	].filter(Boolean);

	return createStore(
		dataReducers,
		applyMiddleware(...middleware)
	)
}