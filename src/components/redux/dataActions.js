import { get } from 'axios';

export const REQUEST_DATA = "REQUEST_DATA";
export const RESPONSE_DATA = "RESPONSE_DATA";

const requestData = () => ({
	type: RESPONSE_DATA
});

const responseData = (data) => ({
	type: RESPONSE_DATA,
	data: data.data,
	median_data: data.median_data,
});

function fetchData(){
	return dispatch => {
		dispatch(requestData());

		get("/api/data")
		.then((response)=>{
			dispatch(responseData(response.data));
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