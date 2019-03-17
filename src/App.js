import React, { Component } from 'react';
import { LineChart , YAxis, XAxis, Tooltip,Legend,Line,CartesianGrid,ReferenceLine} from 'recharts';
import { Input,Button } from 'reactstrap';
import { get } from 'axios';
import { times,reverse,map } from 'lodash';
import './App.css';

const data = [
  {
    "open": "283.51",
    "close": "275.43",
    "high": "283.72",
    "low": "274.40",
    "volume": "14785531",
    "date": "2019-03-15"
  },
  {
    "open": "292.45",
    "close": "289.96",
    "high": "295.39",
    "low": "288.29",
    "volume": "7103447",
    "date": "2019-03-14"
  },
  {
    "open": "283.90",
    "close": "288.96",
    "high": "291.99",
    "low": "282.70",
    "volume": "6844719",
    "date": "2019-03-13"
  },
  {
    "open": "286.49",
    "close": "283.36",
    "high": "288.07",
    "low": "281.06",
    "volume": "7504137",
    "date": "2019-03-12"
  },
  {
    "open": "283.52",
    "close": "290.92",
    "high": "291.28",
    "low": "280.50",
    "volume": "7392278",
    "date": "2019-03-11"
  },
  {
    "open": "276.91",
    "close": "284.14",
    "high": "285.59",
    "low": "275.89",
    "volume": "8819625",
    "date": "2019-03-08"
  },
  {
    "open": "278.84",
    "close": "276.59",
    "high": "284.70",
    "low": "274.25",
    "volume": "9442483",
    "date": "2019-03-07"
  },
  {
    "open": "276.48",
    "close": "276.24",
    "high": "281.51",
    "low": "274.39",
    "volume": "10335485",
    "date": "2019-03-06"
  },
  {
    "open": "282.00",
    "close": "276.54",
    "high": "284.00",
    "low": "270.10",
    "volume": "18764740",
    "date": "2019-03-05"
  },
  {
    "open": "298.12",
    "close": "285.36",
    "high": "299.00",
    "low": "282.78",
    "volume": "17096818",
    "date": "2019-03-04"
  }
];
function getLast(period,history){
  if(period === "month")
    return times(30,(i)=>{
      let key = Object.keys(history)[i];
      let val = Object.values(history)[i];
      return { 
          ...val,
          date:key 
        };
    });
  else if(period === "week")
    return times(7,(i)=>{
      let key = Object.keys(history)[i];
      let val = Object.values(history)[i];
      return { 
          ...val,
          date:key 
        };
    });
  else
    return;
}

function getLowest(data){
  let floatted = map(data,(obj)=>{
    return obj.low;
  });
  return Math.min(...floatted);
}

function getHighest(data){
  let floatted = map(data,(obj)=>{
    return obj.high;
  });
  return Math.max(...floatted);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lowest: getLowest("week",data),
      highest: getHighest("week",data),
    };
  }
  componentDidMount(){
    get("https://www.worldtradingdata.com/api/v1/history?symbol=TSLA&sort=newest&api_token=8JaA8FG34X8VnIqCw3ggb3wXCRWBvSkgC1yWHZy8mDyoDLzqxwQGwGogUwLI")
      .then((res)=>{
        let last = getLast('month',res.data.history);
        this.setState({
          data: last,
          lowest: getLowest(last),
          highest: getHighest(last),
        });
      })
  }
  render() {
    let realData = this.state.data ? this.state.data : data;
    const { lowest, highest } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <LineChart width={900} height={600} data={reverse(realData)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[lowest*0.983, highest*1.017]}/>
          <Tooltip />
          <Legend wrapperStyle={{fontSize: "1em"}}/>
          <ReferenceLine x="2019-03-04" y={lowest} stroke="red" label="Low" />
          <ReferenceLine x="2019-03-04" y={highest} label="Max" stroke="red" /> 
          <Line type="monotone" dataKey="low" stroke="#8884d8" />
          <Line type="monotone" dataKey="high" stroke="#82ca9d" />
        </LineChart>          
        </header>
      </div>
    );
  }
}

export default App;
