import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { namesNSymbols,all } from './names.js';
import { map,filter } from 'lodash';
console.time("Names");
console.log("tee");
let l = filter(namesNSymbols,(obj)=> {
	if(obj.name.toLowerCase().includes('tesl')){
		console.log(obj.name,"Yes")
		return obj;
	}else if(obj.symbol.toLowerCase().includes('msf')){
		return obj;
	} 
})
console.log(l,"naa")
console.timeEnd("Names");
console.time("all");
let j = filter(all,(obj)=> { 
	if(obj.name.toLowerCase().includes('tesl')){
		console.log(obj.name,"Yes")
		return obj;
	}else if(obj.symbol.toLowerCase().includes('msf')){
		return obj;
	} 
})
console.log(j,"nee")
console.timeEnd("all");
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
