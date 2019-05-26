import React, { Component } from 'react';
import { map,toNumber,times,indexOf } from 'lodash';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap'; 
import { ListQuarters,MedianDebtEquityList,
	MedianProfitMarginList,MedianEquityPercentList,
	MedianTRGList, MedianORGList, MedianCORList,toPercent
} from './App.js';
import { closestIndexTo,parseISO} from 'date-fns';
import StockChart from './StockChart';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Stock extends Component {
	render() {
		const { 
			data: allData,
			median_data,
			match: { params: {symbol }}
		} = this.props;
		const data = allData ? allData[symbol] : undefined;
		if(data){
			return (
				<Container className="py-3">
                    <Row className="justify-content-between subtitle">
                        <p> Profit Margin </p>
                    </Row>

					<ListGroup className="black">
						<ListQuarters />
						<ListProfitMargin data={data} />
						<MedianProfitMarginList median_data={median_data} />
					</ListGroup>

                    <Row className="pt-3 subtitle">
                        <p> Debt/Equity Ratio </p>
                    </Row>					
                    <ListGroup className="black">
                    	<ListQuarters />
                    	<ListDebtEquityRatio data={data} />
                    	<MedianDebtEquityList median_data={median_data} />
                    </ListGroup>

                    <Row className="pt-3 subtitle">
                    	<p> Equity Percent </p>
                    </Row>
                    <ListGroup className="black">
                    	<ListQuarters />
                    	<ListEquityPercent data={data} />
                    	<MedianEquityPercentList median_data={median_data}/>
                    </ListGroup>

                    <Row className="pt-3 subtitle">
                    	<p> Total Revenue Growth </p>
                    </Row>
                    <ListGroup className="black">
                    	<ListQuarters />
                    	<ListTRG data={data}/>
                    	<MedianTRGList median_data={median_data}/>
                    </ListGroup>

					<StockChart symbol={symbol} />
				</Container>
			);
		}else{
			return <p></p>;
		}
	}
}

const ListValues = props => (
	<React.Fragment>
		<ListDebtEquityRatio {...props} />
		<MedianDebtEquityList {...props} />
		<ListEquityPercent {...props} />
		<MedianEquityPercentList {...props}/>
	</React.Fragment>
);

const ListProfitMargin = props => (
	<ListGroupItem>
		<Row>
			<Col>
				Profit Margin
			</Col>
			{
				mapQuarters(props.data,(obj)=>{
					return (
						<Col>
							{ obj && obj.profitMargin ? Math.round(obj.profitMargin*100)+"%" : undefined }
						</Col>
					);
				})
			}
		</Row>
	</ListGroupItem>
);

const ListDebtEquityRatio = props => (
	<ListGroupItem>
		<Row>
			<Col>
				Debt/Equity Ratio
			</Col>
			{
				mapQuarters(props.data,(obj)=>{
					return (
						<Col>
							{ obj && obj.debt_equityRatio ? toNumber(obj.debt_equityRatio).toFixed(2) : undefined }
						</Col>
					);
				})
			}
		</Row>
	</ListGroupItem>
);

const ListEquityPercent = props => (
	<ListGroupItem>
		<Row>
			<Col>
				Equity Percent
			</Col>
			{
				mapQuarters(props.data,(obj)=>{
					return (
						<Col>
							{ obj && obj.equityPercent ? Math.round(obj.equityPercent*100)+"%" : undefined }
						</Col>
					);
				})
			}			
		</Row>
	</ListGroupItem>
);

const ListTRG = props => (
	<ListGroupItem>
		<Row>
			<Col>
				Equity Percent
			</Col>
			{
				mapQuarters(props.data,(obj)=>{
					return (
						<Col>
							{ obj ? calculateTRG(obj,props.data) : undefined }
						</Col>
					);
				})
			}			
		</Row>
	</ListGroupItem>
);

function calculateTRG(obj,data){
	let indexOfCurrent = indexOf(data,obj);
	if(data[indexOfCurrent-1]){
		return toPercent(obj.totalRevenue/data[indexOfCurrent-1].totalRevenue);
	}else{
		return undefined;
	}
}

let quarterDates = [new Date(2018,3),new Date(2018,6),new Date(2018,9),new Date(2018,12)];

function mapQuarters(data,callback){
	if(!data) return;
	let arr = [];
	times(4,(index)=>{
		if(data[index]){
			let closest = closestIndexTo(parseISO(data[index].reportDate),quarterDates);
			arr[closest] = callback(data[index]);
		}
	});
	while(arr.includes(undefined)){
		arr[indexOf(arr,undefined)] = callback(undefined);
	}
	if(arr.length !== 4){
		for (let i = arr.length; i < 4; i++) {
			arr[i] = callback(undefined);
		}		
	}
	console.log(arr);
	return arr;
}

const mapStateToProps = (state) => ({
	data: state.data,
	median_data: state.median_data,
});

export default withRouter(connect(mapStateToProps)(Stock));