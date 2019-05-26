import React, { Component } from 'react';
import { map,toNumber,times,indexOf } from 'lodash';
import { Container, Row, Col, ListGroupItem, ListGroup,
	Collapse,Button
} from 'reactstrap'; 
import { ListQuarters,MedianDebtEquityList,
	MedianProfitMarginList,MedianEquityPercentList,
	MedianTRGList, MedianORGList, MedianCORList,toPercent
} from './App.js';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { closestIndexTo,parseISO} from 'date-fns';
import StockChart from './StockChart';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Stock extends Component {
	state = {
		more: false
	};
	constructor(props){
		super(props);

		this.handleCollapse = this.handleCollapse.bind(this);
	}
	handleCollapse(event){
		let { value } = event.target;
		this.setState({
			[value]: !this.state[value],
		});
	}
	render() {
		const { 
			data: allData,
			median_data,
			match: { params: {symbol }}
		} = this.props;

		const {
			more
		} = this.state;

		const data = allData ? allData[symbol] : undefined;
		if(data){
			return (
				<Container className="py-3">
					<Row className="subtitle py-2">
						Quarters in 2018
					</Row>

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
                    	<p> Total Revenue Growth </p>
                    </Row>
                    <ListGroup className="black">
                    	<ListQuarters />
                    	<ListTRG data={data}/>
                    	<MedianTRGList median_data={median_data}/>
                    </ListGroup>

                    <Collapse isOpen={more}>
	                    <Row className="subtitle pt-3">
	                    	<p> Equity Percent </p>
	                    </Row>
	                    <ListGroup className="black">
	                    	<ListQuarters />
	                    	<ListEquityPercent data={data} />
	                    	<MedianEquityPercentList median_data={median_data}/>
	                    </ListGroup>
	                    
	                    <Row className="pt-3 subtitle">
	                    	<p> Operating Revenue Growth </p>
	                    </Row>
	                    <ListGroup className="black">
	                    	<ListQuarters />
	                    	<ListORG data={data}/>
	                    	<MedianORGList median_data={median_data}/>
	                    </ListGroup>
                    </Collapse>

                    <Row className="justify-content-center py-3">
                    	{
                    		more ? 
                    			<Button onClick={this.handleCollapse} value="more"> 
                    				Show Less <MdArrowDropUp className="my-auto scale-2" /> 
                    			</Button>
                    		:
                    			<Button onClick={this.handleCollapse} value="more"> 
                    			Show More <MdArrowDropDown className="my-auto scale-2" />
                    			</Button>
                    	}
                    </Row>
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
				mapQuarters(props.data,(obj,index)=>{
					return (
						<Col key={index+obj}>
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
				mapQuarters(props.data,(obj,index)=>{
					return (
						<Col key={index+obj}>
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
				mapQuarters(props.data,(obj,index)=>{
					return (
						<Col key={index+obj}>
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
				Total Revenue Growth
			</Col>
			{
				mapQuarters(props.data,(obj,index)=>{
					return (
						<Col key={index+obj}>
							{ obj ? calculateChange(obj,props.data,"totalRevenue") : undefined }
						</Col>
					);
				})
			}			
		</Row>
	</ListGroupItem>
);

function calculateChange(obj,data,changeName){
	let indexOfCurrent = indexOf(data,obj);
	if(data[indexOfCurrent-1]){
		return toPercent(obj[changeName]/data[indexOfCurrent-1][changeName]);
	}else{
		return undefined;
	}
}

const ListORG = props => (
	<ListGroupItem>
		<Row>
			<Col>
				Operating Revenue Growth
			</Col>
			{
				mapQuarters(props.data,(obj,index)=>{
					return (
						<Col key={index+obj}>
							{ obj ? calculateChange(obj,props.data,"operatingRevenue") : undefined }
						</Col>
					);
				})
			}			
		</Row>
	</ListGroupItem>
);



let quarterDates = [new Date(2018,3),new Date(2018,6),new Date(2018,9),new Date(2018,12)];

function mapQuarters(data,callback){
	if(!data) return;
	let arr = [];
	times(4,(index)=>{
		if(data[index]){
			let closest = closestIndexTo(parseISO(data[index].reportDate),quarterDates);
			arr[closest] = callback(data[index],index);
		}
	});
	while(arr.includes(undefined)){
		let index = indexOf(arr,undefined);
		arr[index] = callback(undefined,index);
	}
	if(arr.length !== 4){
		for (let i = arr.length; i < 4; i++) {
			arr[i] = callback(undefined,i);
		}		
	}
	return arr;
}

const mapStateToProps = (state) => ({
	data: state.data,
	median_data: state.median_data,
});

export default withRouter(connect(mapStateToProps)(Stock));