import { 		
	REQUEST_DATA,
	RESPONSE_DATA,
	REQUEST_PERFORMANCE,
	RESPONSE_PERFORMANCE,
	REQUEST_MEDIAN_DATA,
	RESPONSE_MEDIAN_DATA
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
		case REQUEST_PERFORMANCE:
			return Object.assign({},state,{
				isFetchingPerformance: true,
			});
		case RESPONSE_PERFORMANCE:
			return Object.assign({},state,{
				isFetchingPerformance: false,
				performance: action.performance,
				performanceLastUpdated: action.performanceLastUpdated,
			});
		case REQUEST_MEDIAN_DATA:
			return Object.assign({},state,{
				isFetchingMedianData: true,
			});
		case RESPONSE_MEDIAN_DATA:
			return Object.assign({},state,{
				isFetchingMedianData: false,
				median_data: action.median_data,
			});
		default: 
			return state;
	}
}

export default dataReducers;