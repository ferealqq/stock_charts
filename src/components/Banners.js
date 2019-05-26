import React, { Component } from 'react';
import { Nav, Navbar, NavItem,Collapse,NavbarToggler,NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

export class TopBanner extends Component {
	state = {
		open: false,
	};
	render() {
		return (
			<div className="w-90 m-auto">
				<Navbar expand="md">
					<NavbarBrand className="no-default">
						<Link to="/" className="no-default"> Finance Industry Data US </Link> 
					</NavbarBrand>
					
					<NavbarToggler onClick={()=>this.setState({open: !this.state.open})} />
					<Collapse isOpen={this.state.open} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link to="/companies">
									Companies
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
