import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/App.scss';
import './App.css';
import { 
    Container, Row,ListGroup,Button,
    ListGroupItem,Col
} from 'reactstrap';
import { map,toNumber } from 'lodash';
import { fetchDataIfNeeded,fetchPerformanceIfNeeded,fetchMediansIfNeeded } from './redux/dataActions';
import { withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

class App extends Component {
    state = {
        isOpen: false,
    };
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount(){
        this.props.fetchDataIfNeeded();
        this.props.fetchPerformanceIfNeeded();
        this.props.fetchMediansIfNeeded();
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        const { performance,performanceLastUpdated,median_data } = this.props;
        return (
            <Container className="App py-3" fluid>
                <Container>
                    <Row className="justify-content-between subtitle">
                        {
                            performance ? 
                                <p> Performance: {(performance*100).toFixed(2)}% </p>
                            : 
                                null
                        }
                        <p> Last updated: {new Date(performanceLastUpdated||"").toLocaleDateString('en-US')} </p>
                    </Row>

                    <ListGroup className="black">
                        <ListQuarters />
                        <ListValues median_data={median_data}/>
                    </ListGroup>
                </Container>
            </Container>
        );
    }
}

export const ListQuarters = (props) => (
    <ListGroupItem>
        <Row>
            <Col>
                Quarter
            </Col>
            <Col>
                Q1
            </Col>
            <Col>
                Q2
            </Col>
            <Col>
                Q3
            </Col>
            <Col>
                Q4
            </Col>
        </Row>
    </ListGroupItem>
);

const ListValues = (props) => (
    <React.Fragment>
        <MedianProfitMarginList {...props}/>
        <MedianDebtEquityList {...props}/>
        <MedianEquityPercentList {...props} />
        <MedianTRGList {...props} />
        <MedianORGList {...props} />
        <MedianCORList {...props} />
    </React.Fragment>
);

export const MedianProfitMarginList = (props) => (
    <ListGroupItem>
        <Row>
            <Col>
                Profit Margin Median
            </Col>
            {  
                map(props.median_data,(obj,index)=>
                    <Col key={index}>
                        {Math.round(obj.profitMargin*100)}%
                    </Col>
                )
            }
        </Row>
    </ListGroupItem>
);

export const MedianDebtEquityList = (props) => (
    <ListGroupItem>
        <Row>
            <Col>
                Debt/Equity Ratio Median
            </Col>
            {
                map(props.median_data,(obj,index)=>
                    <Col key={index}>
                        { toNumber(obj.debt_equityRatio).toFixed(2)}
                    </Col>
                )
            }
        </Row>
    </ListGroupItem> 
);

export const MedianEquityPercentList = (props) => (
    <ListGroupItem>
        <Row>
            <Col>
                Equity Percent Median
            </Col>
            {
                map(props.median_data,(obj,index)=>
                    <Col key={index}>
                        { Math.round(obj.equityPercent*100) }%
                    </Col>
                )
            }
        </Row>
    </ListGroupItem> 
);

export const MedianTRGList = (props) => (
    <ListGroupItem>
        <Row>
            <Col>
                Total Revenue Growth Median
            </Col>
            {
                map(props.median_data,(obj,index)=>
                    <Col key={index}>
                        { toPercent(obj.totalRevenueGrowth)}
                    </Col>
                )
            }
        </Row>
    </ListGroupItem> 
);

export const MedianORGList = (props) => (
    <ListGroupItem>
        <Row>
            <Col>
                Operating Revenue Growth Median
            </Col>
            {
                map(props.median_data,(obj,index)=>
                    <Col key={index}>
                        { toPercent(obj.operatingRevenueGrowth)}
                    </Col>
                )
            }
        </Row>
    </ListGroupItem>     
);

export const MedianCORList = props => (
    <ListGroupItem>
        <Row>
            <Col>
                Cost Of Revenue Growth Median
            </Col>
            {
                map(props.median_data,(obj,index)=>
                    <Col key={index}>
                        { toPercent(obj.costOfRevenueGrowth)}
                    </Col>
                )
            }
        </Row>
    </ListGroupItem> 
);

export function toPercent(value){
    if(!value)
        return;
    else if(value > 1)
        return Math.round(value*100)-100+"%";
    else if(value < 1)
        return Math.round(value*100)-100+"%";
    else if(value === 1)
        return 0+"%";
    else 
        return;
}

const mapDispatchToProps = (dispatch) => ({
    fetchDataIfNeeded: () => dispatch(fetchDataIfNeeded()),
    fetchPerformanceIfNeeded: () => dispatch(fetchPerformanceIfNeeded()),
    fetchMediansIfNeeded: () => dispatch(fetchMediansIfNeeded()),
});

const mapStateToProps = (state) => ({
    data: state.data,
    performance: state.performance,
    performanceLastUpdated: state.performanceLastUpdated,
    isFetchingPerformance: state.isFetchingPerformance,
    isFetching: state.isFetching, 
    median_data: state.median_data,
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));