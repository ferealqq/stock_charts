import { 		
	REQUEST_DATA,
	RESPONSE_DATA,
} from './dataActions.js';

function dataReducers(state={ isFetching: false },action){
	switch(action.type){
		case REQUEST_DATA:
			return Object.assign({},state,{
				isFetching: true,
			});
		case RESPONSE_DATA:
			return Object.assign({},state,{
				isFetching: false,
				data: action.data,
				median_data: action.median_data,
			});
		default: 
			return state;
	}
}

export default dataReducers;