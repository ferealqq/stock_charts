import React, { Component } from 'react';
import { map,toNumber } from 'lodash';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap'; 
import StockChart from './StockChart';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Stock extends Component {
	render() {
		const { 
			data,
			median_data,
			match: { params: {symbol }}
		} = this.props;
		if(data){
			return (
				<Container>
					<ListGroup>
						<Listheaders headers={["Net Income", "Profit Margin", "Median(Profit Margin)", "Report Date"]} />
						<QuartersProfit data={data ? data[symbol] : undefined} median_data={median_data} />
					</ListGroup>

					<ListGroup className="py-4">
						<Listheaders headers={["Debt to equity ratio","Median","Report Date"]} />
						<QuartersDebtEquityRatio data={data ? data [symbol] : undefined} median_data={median_data} />
					</ListGroup>

					<ListGroup className="pt-4">
						<Listheaders headers={["Equity Percent","Median","Report Date"]} />
						<QuartersEquityPercent data={data ? data [symbol] : undefined} median_data={median_data} />
					</ListGroup>

					<StockChart symbol={symbol} />
				</Container>
			);
		}else{
			return <p></p>;
		}
	}
}
//debt_equityRatio
//equityPercent
const Listheaders = (props) => (
	<ListGroupItem className="black">
		<Row>
			{
				map(props.headers,(header)=>
					<Col className="p-0" sm="3">
						{header}
					</Col>
				)
			}
		</Row>
	</ListGroupItem>
);	

const QuartersProfit = (props) => (
	<React.Fragment>
		{
			map(props.data,(obj,index)=>
				<ListProfitQuarter data={obj} key={index} 
					median={props.median_data ? Object.values(props.median_data)[index].profitMargin : undefined} />
			)
		}
	</React.Fragment>
);

const ListProfitQuarter = (props) => (
	<ListGroupItem className="black">
		<Row>
			<Col className="p-0" sm="3">
				{Math.round(props.data.netIncome/1000).toLocaleString("fr-FR")}k$
			</Col>
			<Col className="p-0" sm="3">
				{Math.round(props.data.profitMargin*100)}%
			</Col>
			<Col className="p-0" sm="3">
				{Math.round(props.median*100)}%
			</Col>
			<Col className="p-0" sm="3">
				{props.data.reportDate}
			</Col>
		</Row>		
	</ListGroupItem>
);

const QuartersDebtEquityRatio = (props) => (
	<React.Fragment>
		{
			map(props.data,(obj,index)=>
				<ListDebtEquityRatioQuarter data={obj} key={index} 
					median={props.median_data ? Object.values(props.median_data)[index].debt_equityRatio : undefined} />				
			)
		}
	</React.Fragment>
);

const ListDebtEquityRatioQuarter = (props) => (
	<ListGroupItem className="black">
		<Row>
			<Col className="p-0" sm="3">
				{toNumber(props.data.debt_equityRatio).toFixed(1)}
			</Col>
			<Col className="p-0" sm="3">
				{toNumber(props.median).toFixed(1)}
			</Col>
			<Col className="p-0" sm="3">
				{props.data.reportDate}
			</Col>
		</Row>		
	</ListGroupItem>
);

const QuartersEquityPercent = (props) => (
	<React.Fragment>
		{
			map(props.data,(obj,index)=>
				<ListEquityPercentQuarter data={obj} key={index} 
					median={props.median_data ? Object.values(props.median_data)[index].equityPercent : undefined} />
			)
		}
	</React.Fragment>
);

const ListEquityPercentQuarter = (props) => (
	<ListGroupItem className="black">
		<Row>
			<Col className="p-0" sm="3">
				{Math.round(props.data.equityPercent*100)}%
			</Col>
			<Col className="p-0" sm="3">
				{Math.round(props.median*100)}%
			</Col>
			<Col className="p-0" sm="3">
				{props.data.reportDate}
			</Col>
		</Row>		
	</ListGroupItem>	
);

const mapStateToProps = (state) => ({
	data: state.data,
	median_data: state.median_data,
});

export default withRouter(connect(mapStateToProps)(Stock));