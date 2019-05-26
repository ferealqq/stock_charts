import { get } from 'axios';
import { find } from 'lodash';
export const REQUEST_DATA = "REQUEST_DATA";
export const RESPONSE_DATA = "RESPONSE_DATA";

export const REQUEST_PERFORMANCE = "REQUEST_PERFORMANCE";
export const RESPONSE_PERFORMANCE = "RESPONSE_PERFORMANCE";

export const REQUEST_MEDIAN_DATA = "REQUEST_MEDIAN_DATA";
export const RESPONSE_MEDIAN_DATA = "RESPONSE_MEDIAN_DATA";

const requestData = () => ({
	type: RESPONSE_DATA
});

const responseData = (data) => ({
	type: RESPONSE_DATA,
	data: data,
});

function fetchData(){
	return dispatch => {
		dispatch(requestData());

		get("/api/data")
		.then((response)=>{
			dispatch(responseData(response.data.data));
		})
		.catch((err)=>{
			console.log(err);
		})
	};
}

function shouldFetch(state){
	if(state.isFetching){
		return false;
	}else if(state.data){
		return false;
	}else{
		return true;
	}
}

export function fetchDataIfNeeded(){
	return (dispatch,getState)=>{
		const state = getState();
		if(shouldFetch(state)){
			return dispatch(fetchData());
		}
	};
}

const requestPerformance = () => ({
	type: REQUEST_PERFORMANCE,
});

const responsePerformance = (data) => ({
	type: RESPONSE_PERFORMANCE,
	performance: data.performance,
	performanceLastUpdated: data.lastUpdated,
});

function fetchPerformance(){
	return dispatch=>{
		dispatch(requestPerformance());

		get("https://api.iextrading.com/1.0/stock/market/sector-performance")
		.then(response=>{
			const { data } = response;
			const foundData = find(data,{ name: "Financials"});
			dispatch(responsePerformance(foundData));
		})
		.catch(err=>{

		});
	};
}

export function fetchPerformanceIfNeeded(){
	return (dispatch,getState) => {
		const state = getState();
		if(!state.isFetchingPerformance && !state.performance){
			return dispatch(fetchPerformance());
		}
	}
}

const requestMedianData = () => ({
	type: REQUEST_MEDIAN_DATA,
});

const responseMedianData = (data) => ({
	type: RESPONSE_MEDIAN_DATA,
	median_data: data,
})

function fetchMedianData(){
	return dispatch => {
		dispatch(requestMedianData());
		get("/api/medians")
		.then((response)=>{
			dispatch(responseMedianData(response.data.median_data));
		})
		.catch(err=>{

		});
	};
}

export function fetchMediansIfNeeded(){
	return (dispatch,getState) => {
		const state = getState();
		if(!state.isFetchingMedians && !state.median_data)
			return dispatch(fetchMedianData());
	}
}