import React, { Component } from 'react';
import './App.css';
import { 
    Container, Row,Nav,NavItem,Button,
    Collapse,NavbarToggler,Navbar 
} from 'reactstrap';
import { map } from 'lodash';
import { fetchDataIfNeeded } from './redux/dataActions';
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
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <Container className="App" fluid>
                <Container>
                    <Row>
                        <h3> Companies </h3>
                    </Row>
                    <Navbar expand="md">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>                    
                            <Nav>
                                <LinkList data={this.props.data ? Object.keys(this.props.data) : null}/>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
                { this.props.children }
            </Container>
        );
    }
}

const LinkList = (props) => (
    <React.Fragment>
        {
            map(props.data,(key)=>
                <NavItem className="p-2" key={key}>
                    <Link to={`/symbol/${key}`} className="no-default">
                        <Button color="primary" className="p-2">
                            {key}
                        </Button>
                    </Link>
                </NavItem>
            )
        }
    </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
    fetchDataIfNeeded: () => dispatch(fetchDataIfNeeded()),
});

const mapStateToProps = (state) => ({
    data: state.data,
    isFetching: state.isFetching, 
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));