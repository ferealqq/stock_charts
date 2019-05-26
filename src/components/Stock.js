import React, { Component } from 'react';
import { map } from 'lodash';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap'; 
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
						<Listheaders />
						<ListQuarters data={data ? data[symbol] : undefined} median_data={median_data} />
					</ListGroup>
				</Container>
			);
		}else{
			return <p></p>;
		}
	}
}

const Listheaders = (props) => (
	<ListGroupItem className="black">
		<Row>
			<Col className="p-0" sm="3">
				Net Income
			</Col>
			<Col className="p-0" sm="3">
				Profit Margin
			</Col>
			<Col className="p-0" sm="3">
				Median(Profit Margin)
			</Col>
			<Col className="p-0" sm="3">
				Quarter
			</Col>
		</Row>
	</ListGroupItem>
);	

const ListQuarters = (props) => (
	<React.Fragment>
		{
			map(props.data,(obj,index)=>
				<ListQuarter data={obj} key={index} 
					median={props.median_data ? Object.values(props.median_data)[index].profitMargin : undefined} />
			)
		}
	</React.Fragment>
);

const ListQuarter = (props) => (
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

const mapStateToProps = (state) => ({
	data: state.data,
	median_data: state.median_data,
});

export default withRouter(connect(mapStateToProps)(Stock));